/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<99ce042d42ad38de74e220e2fe36629c>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { UpdatableQuery, ConcreteUpdatableQuery } from 'relay-runtime';
export type readUpdatableQueryEXPERIMENTALTest1Query$variables = {||};
export type readUpdatableQueryEXPERIMENTALTest1Query$data = {|
  updatable_scalar_field: ?any,
|};
export type readUpdatableQueryEXPERIMENTALTest1Query = {|
  response: readUpdatableQueryEXPERIMENTALTest1Query$data,
  variables: readUpdatableQueryEXPERIMENTALTest1Query$variables,
|};
*/

var node/*: ConcreteUpdatableQuery*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "readUpdatableQueryEXPERIMENTALTest1Query",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatable_scalar_field",
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "UpdatableQuery"
};

if (__DEV__) {
  (node/*: any*/).hash = "deed3e3557d65f6306d1ab18a8a59859";
}

module.exports = ((node/*: any*/)/*: UpdatableQuery<
  readUpdatableQueryEXPERIMENTALTest1Query$variables,
  readUpdatableQueryEXPERIMENTALTest1Query$data,
>*/);
