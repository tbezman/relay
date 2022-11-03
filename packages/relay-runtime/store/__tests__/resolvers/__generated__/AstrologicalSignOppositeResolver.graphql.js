/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<4a552f12accd7549b272250252742fad>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { AstrologicalSignSelfResolver$key } from "./AstrologicalSignSelfResolver.graphql";
import type { FragmentType } from "relay-runtime";
import {self as astrologicalSignSelfResolver} from "../AstrologicalSignSelfResolver.js";
// Type assertion validating that `astrologicalSignSelfResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(astrologicalSignSelfResolver: (
  rootKey: AstrologicalSignSelfResolver$key, 
) => mixed);
declare export opaque type AstrologicalSignOppositeResolver$fragmentType: FragmentType;
export type AstrologicalSignOppositeResolver$data = {|
  +self: ?$Call<<R>((...empty[]) => R) => R, typeof astrologicalSignSelfResolver>,
  +$fragmentType: AstrologicalSignOppositeResolver$fragmentType,
|};
export type AstrologicalSignOppositeResolver$key = {
  +$data?: AstrologicalSignOppositeResolver$data,
  +$fragmentSpreads: AstrologicalSignOppositeResolver$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AstrologicalSignOppositeResolver",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AstrologicalSignSelfResolver"
      },
      "kind": "RelayResolver",
      "name": "self",
      "resolverModule": require('./../AstrologicalSignSelfResolver').self,
      "path": "self"
    }
  ],
  "type": "AstrologicalSign",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "af597379ec145e8c2cb304b0e30821fb";
}

module.exports = ((node/*: any*/)/*: Fragment<
  AstrologicalSignOppositeResolver$fragmentType,
  AstrologicalSignOppositeResolver$data,
>*/);
