# Health Checks Plugin for GraphQL Mesh

Health Checks Plugin is a plugin for GraphQL Mesh that introduces new routes specifically designed for monitoring and providing health information about your GraphQL service. This plugin adds three key endpoints: /version, /alive, and /ready, which can be configured to suit your operational and deployment needs.

## Installation

Before you can use the Health Checks Plugin, you need to install it along with GraphQL Mesh if you haven't already done so. You can install these using npm or yarn.

```bash
npm install @dmamontov/graphql-mesh-health-checks-plugin
```

or

```bash
yarn add @dmamontov/graphql-mesh-health-checks-plugin
```

## Configuration

### Modifying tsconfig.json

To make TypeScript recognize the Health Checks Plugin, you need to add an alias in your tsconfig.json.

Add the following paths configuration under the compilerOptions in your tsconfig.json file:

```json
{
  "compilerOptions": {
    "paths": {
       "health-checks": ["node_modules/@dmamontov/graphql-mesh-health-checks-plugin"]
    }
  }
}
```

### Adding the Plugin to GraphQL Mesh

You need to include the Health Checks Plugin in your GraphQL Mesh configuration file (usually .meshrc.yaml). Below is an example configuration that demonstrates how to use this plugin:

```yaml
plugins:
  - healthChecks:
      alive:
        endpoint: /alive
      ready:
        endpoint: /ready
      version:
        endpoint: /version
        version: release-9fa5d011
        git:
          branch: main
          shortHash: 9fa5d011
          tag: 1.0.0
        build:
          date: 2024-05-02T08:10:44Z
          number: 6762592306
```

## Conclusion

Remember, always test your configurations in a development environment before applying them in production to ensure that everything works as expected.