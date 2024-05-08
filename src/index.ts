import { type Plugin } from 'graphql-yoga';
import { type MeshPlugin, type MeshPluginOptions } from '@graphql-mesh/types';
import { type HealthChecksPluginConfig } from './types';
import { evaluate } from './utils';

export default function useHealthChecks(
    options: MeshPluginOptions<HealthChecksPluginConfig>,
): MeshPlugin<any> {
    const { alive, ready, version } = options;

    return {
        onPluginInit({ addPlugin }) {
            addPlugin({
                onRequest({ url, fetchAPI, endResponse }) {
                    if (alive?.endpoint && url.pathname === evaluate(alive.endpoint)) {
                        endResponse(new fetchAPI.Response('OK'));
                    } else if (ready?.endpoint && url.pathname === evaluate(ready.endpoint)) {
                        endResponse(
                            new fetchAPI.Response(
                                JSON.stringify(
                                    {
                                        is_ready: true,
                                        checks: [],
                                    },
                                    null,
                                    2,
                                ),
                                {
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                },
                            ),
                        );
                    } else if (version?.endpoint && url.pathname === evaluate(version.endpoint)) {
                        endResponse(
                            new fetchAPI.Response(
                                JSON.stringify(
                                    {
                                        git_branch: evaluate(version?.git?.branch),
                                        git_short_hash: evaluate(version?.git?.shortHash),
                                        git_tag: evaluate(version?.git?.tag),
                                        build_date: evaluate(version?.build?.date),
                                        build_number: evaluate(version?.build?.number),
                                        app_version: evaluate(version?.version),
                                    },
                                    null,
                                    2,
                                ),
                                {
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                },
                            ),
                        );
                    }
                },
            } as Plugin);
        },
    };
}
