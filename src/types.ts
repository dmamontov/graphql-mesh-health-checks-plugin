export interface HealthChecksPluginConfig {
    alive: HealthChecksPluginAliveConfig;
    ready: HealthChecksPluginReadyConfig;
    version: HealthChecksPluginVersionConfig;
}

export interface HealthChecksPluginAliveConfig {
    endpoint: string;
}

export interface HealthChecksPluginReadyConfig {
    endpoint: string;
}

export interface HealthChecksPluginVersionConfig {
    endpoint: string;
    git: HealthChecksPluginVersionGitConfig;
    build: HealthChecksPluginVersionBuildConfig;
    version: string;
}

export interface HealthChecksPluginVersionGitConfig {
    branch?: string;
    shortHash?: string;
    tag?: string;
}

export interface HealthChecksPluginVersionBuildConfig {
    date?: string;
    number?: string;
}
