// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  certifications: [
    // Certifications Parent
    {
      type: "category",
      label: "Certifications",
      link: {
        type: "doc",
        id: "all-certifications",
        //type: 'generated-index',
      },
      collapsed: false,
      //items: [{ type: "autogenerated", dirName: "." }],
      items: [
        // CD
        {
          type: "doc",
          label: "Continuous Delivery & GitOps",
          id: "continuous-delivery/continuous-delivery",
        },
      ],
    },
    //Additional Items in this parent can go here.
  ],
};

module.exports = sidebars;
