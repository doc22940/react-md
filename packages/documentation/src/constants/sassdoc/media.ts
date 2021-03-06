/** this file is generated from `yarn dev-utils sassdoc` and should not be updated manually */
import { PackageSassDoc } from "utils/sassdoc";

const sassdoc: PackageSassDoc = {
  functions: {},
  mixins: {
    "rmd-media-aspect-ratio-container": {
      name: "rmd-media-aspect-ratio-container",
      description:
        "Creates the styles for a media container that should enforce a specific aspect ratio.\n",
      source: "packages/media/src/_mixins.scss#L11-L16",
      usedBy: [{ name: "react-md-media", type: "mixin", packageName: "media" }],
      packageName: "media",
      code: "@mixin rmd-media-aspect-ratio-container { … }",
      sourceCode:
        "@mixin rmd-media-aspect-ratio-container {\n  display: block;\n  height: 0;\n  overflow: hidden;\n  padding: 0;\n}\n",
      type: "mixin",
    },
    "rmd-media-forced-aspect-ratio": {
      name: "rmd-media-forced-aspect-ratio",
      description:
        "Creates the styles for a responsive media item that should have a specific aspect ratio.\n",
      source: "packages/media/src/_mixins.scss#L20-L28",
      usedBy: [{ name: "react-md-media", type: "mixin", packageName: "media" }],
      packageName: "media",
      code: "@mixin rmd-media-forced-aspect-ratio { … }",
      sourceCode:
        "@mixin rmd-media-forced-aspect-ratio {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n}\n",
      type: "mixin",
    },
    "rmd-media": {
      name: "rmd-media",
      description:
        "Creates the styles for a responsive media item that will update its height and width based on the parent element.\n",
      source: "packages/media/src/_mixins.scss#L32-L35",
      usedBy: [
        { name: "react-md-media", type: "mixin", packageName: "media" },
        { name: "react-md-media", type: "mixin", packageName: "media" },
      ],
      packageName: "media",
      code: "@mixin rmd-media { … }",
      sourceCode: "@mixin rmd-media {\n  height: auto;\n  width: 100%;\n}\n",
      type: "mixin",
    },
    "rmd-media-overlay-position": {
      name: "rmd-media-overlay-position",
      description:
        "Creates the base positioning styles for the media overlay element.\n",
      source: "packages/media/src/_mixins.scss#L39-L76",
      usedBy: [
        { name: "rmd-media-overlay", type: "mixin", packageName: "media" },
      ],
      packageName: "media",
      code: "@mixin rmd-media-overlay-position($position) { … }",
      sourceCode:
        '@mixin rmd-media-overlay-position($position) {\n  $position: rmd-utils-validate(\n    $rmd-media-overlay-positions,\n    $position,\n    "rmd-media-overlay-positions"\n  );\n\n  @if $position == left or $position == right or $position == center {\n    bottom: 0;\n    top: 0;\n    width: $rmd-media-overlay-horizontal-width;\n\n    @if $position == left {\n      left: 0;\n    } @else if $position == right {\n      right: 0;\n    } @else if $position == center {\n      left: 50%;\n      transform: translateX(-50%);\n    }\n  } @else if $position == top or $position == bottom or $position == middle {\n    left: 0;\n    right: 0;\n\n    @if $position == top {\n      top: 0;\n    } @else if $position == bottom {\n      bottom: 0;\n    } @else if $position == middle {\n      top: 50%;\n      transform: translateY(-50%);\n    }\n  } @else if $position == absolute-center {\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n}\n',
      type: "mixin",
      parameters: [
        {
          type: "String",
          name: "position",
          description: "One of the `rmd-media-overlay-positions` values",
        },
      ],
    },
    "rmd-media-overlay": {
      name: "rmd-media-overlay",
      description:
        "Creates the media overlay styles. All this really does is update the theme background and text colors based on the provided background color for the overlay element.",
      source: "packages/media/src/_mixins.scss#L87-L112",
      usedBy: [{ name: "react-md-media", type: "mixin", packageName: "media" }],
      packageName: "media",
      code:
        "@mixin rmd-media-overlay($background-color: $rmd-media-overlay-background-color, $color: null) { … }",
      sourceCode:
        '@mixin rmd-media-overlay(\n  $background-color: $rmd-media-overlay-background-color,\n  $color: null\n) {\n  @if $color == null {\n    $light: rmd-theme-tone($background-color) == "light";\n    $color: rmd-theme-var(\n      if($light, text-primary-on-light, text-primary-on-dark)\n    );\n    $secondary-color: rmd-theme-var(\n      if($light, text-secondary-on-light, text-secondary-on-dark)\n    );\n\n    @include rmd-theme-update-var(\n      text-secondary-on-background,\n      $secondary-color\n    );\n  }\n\n  @include rmd-theme-update-var(background, $background-color);\n  @include rmd-theme-update-var(text-primary-on-background, $color);\n  @include rmd-theme(background-color, background);\n  @include rmd-theme(color, text-primary-on-background);\n\n  padding: $rmd-media-overlay-padding;\n  position: absolute;\n  z-index: 1;\n\n  @if $rmd-media-overlay-positions != null {\n    @each $position in $rmd-media-overlay-positions {\n      &--#{$position} {\n        @include rmd-media-overlay-position($position);\n      }\n    }\n  }\n}\n',
      type: "mixin",
      parameters: [
        {
          type: "Color",
          name: "background-color",
          default: "rmd-media-overlay-background-color",
          description: "The background color for the media overlay.",
        },
        {
          type: "Color",
          name: "color",
          default: "null",
          description:
            "An optional color to use for the overlay. If this is `null`, it will determine the contrast tone of the background color and use either the light or dark theme variables instead.",
        },
      ],
    },
    "react-md-media": {
      name: "react-md-media",
      description: "Creates all the styles for the media package.\n",
      source: "packages/media/src/_mixins.scss#L115-L156",
      usedBy: [{ name: "react-md-utils", type: "mixin", packageName: "utils" }],
      packageName: "media",
      code: "@mixin react-md-media { … }",
      sourceCode:
        "@mixin react-md-media {\n  .rmd-media-container {\n    display: inline-block;\n    position: relative;\n\n    @each $selector in $rmd-media-selectors {\n      &--auto #{$selector} {\n        @include rmd-media;\n      }\n\n      &--aspect-ratio #{$selector} {\n        @include rmd-media-forced-aspect-ratio;\n      }\n    }\n\n    &--aspect-ratio {\n      @include rmd-media-aspect-ratio-container;\n    }\n\n    @each $key, $value in $rmd-media-default-aspect-ratios {\n      &--#{$key} {\n        $width: nth($value, 1);\n        $height: nth($value, 2);\n\n        padding-bottom: percentage($height / $width);\n      }\n    }\n\n    &--full-width {\n      display: block;\n      width: 100%;\n    }\n  }\n\n  .rmd-media {\n    @include rmd-media;\n  }\n\n  .rmd-media-overlay {\n    @include rmd-media-overlay;\n  }\n}\n",
      type: "mixin",
    },
  },
  variables: {
    "rmd-media-overlay-background-color": {
      name: "rmd-media-overlay-background-color",
      description: "The background color for a media overlay.\n",
      source: "packages/media/src/_variables.scss#L9",
      packageName: "media",
      type: "Color",
      value: "rgba($rmd-black-base, 0.54)",
      compiled: "rgba(0, 0, 0, 0.54)",
      overridable: true,
    },
    "rmd-media-selectors": {
      name: "rmd-media-selectors",
      description:
        "A list of selectors or html elements that should be considered responsive media by default. This will make it so that when using the `MediaContainer` component, the following elements will be responsive automatically.\n",
      source: "packages/media/src/_variables.scss#L15",
      usedBy: [{ name: "react-md-media", type: "mixin", packageName: "media" }],
      packageName: "media",
      type: "List",
      value: "(img '>svg' iframe video embed object)",
      overridable: true,
    },
    "rmd-media-default-aspect-ratio": {
      name: "rmd-media-default-aspect-ratio",
      description:
        "The default aspect ratio for the media component when an aspect ratio is enforced.\n",
      source: "packages/media/src/_variables.scss#L20",
      packageName: "media",
      type: "Number",
      value: "percentage(9 / 16)",
      overridable: true,
    },
    "rmd-media-default-aspect-ratios": {
      name: "rmd-media-default-aspect-ratios",
      description:
        "A Map including the default aspect ratios to create for responsive media with a forced aspect ratio. Each key must be a string for a class name suffix and each value should be a list in the form of (width height).\n",
      source: "packages/media/src/_variables.scss#L26-L30",
      usedBy: [{ name: "react-md-media", type: "mixin", packageName: "media" }],
      packageName: "media",
      type: "Map",
      value: "(\n  '16-9': 16 9,\n  '4-3': 4 3,\n  '1-1': 1 1,\n)",
      overridable: true,
    },
    "rmd-media-overlay-padding": {
      name: "rmd-media-overlay-padding",
      description: "The default padding for the media overlay component.\n",
      source: "packages/media/src/_variables.scss#L34",
      usedBy: [
        { name: "rmd-media-overlay", type: "mixin", packageName: "media" },
      ],
      packageName: "media",
      type: "Number",
      value: "1rem",
      overridable: true,
    },
    "rmd-media-overlay-horizontal-width": {
      name: "rmd-media-overlay-horizontal-width",
      description:
        "This is the default width for the media overlay component when the position is set to `left`, `right`, or `center`. This is really just added since these positions might cause overflow issues since their width will change based on the content size. Setting it to a width will prevent this.\n\nSo if you'd like to add the default behavior back, you can set this to `100%` or `null`.\n",
      source: "packages/media/src/_variables.scss#L44",
      usedBy: [
        {
          name: "rmd-media-overlay-position",
          type: "mixin",
          packageName: "media",
        },
      ],
      packageName: "media",
      type: "Number",
      value: "30%",
      overridable: true,
    },
    "rmd-media-overlay-positions": {
      name: "rmd-media-overlay-positions",
      description:
        "The positions for the media overlay. This can be set to an empty list or null if you'd like to save a few bytes by not generating the styles for some positions.\n",
      source: "packages/media/src/_variables.scss#L50",
      usedBy: [
        {
          name: "rmd-media-overlay-position",
          type: "mixin",
          packageName: "media",
        },
        { name: "rmd-media-overlay", type: "mixin", packageName: "media" },
        { name: "rmd-media-overlay", type: "mixin", packageName: "media" },
      ],
      packageName: "media",
      type: "List",
      value: "(top right bottom left middle center absolute-center)",
      overridable: true,
    },
  },
};

export default sassdoc;
