
module.exports = {
    title: 'React Style Guide Example',
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withDefaultConfig({
        // exclude internal props
        propFilter: (prop, component) => !prop.name.startsWith("_")
    }).parse,
    skipComponentsWithoutExample: true,
    pagePerSection: true,
};
