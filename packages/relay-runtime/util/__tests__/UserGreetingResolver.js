/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 *
 * @format
 * @flow strict-local
 * @emails oncall+relay
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {UserGreetingResolver$key} from './__generated__/UserGreetingResolver.graphql';

const {graphql} = require('relay-runtime');
const {readFragment} = require('relay-runtime/store/ResolverFragments');

/**
 * @RelayResolver
 * @fieldName greeting
 * @rootFragment UserGreetingResolver
 * @onType User
 *
 * Greet the user.
 */
function userGreeting(rootKey: UserGreetingResolver$key): string {
  const user = readFragment(
    graphql`
      fragment UserGreetingResolver on User {
        name
      }
    `,
    rootKey,
  );
  const name = user.name ?? 'Stranger';
  return `Hello, ${name}!`;
}

module.exports = userGreeting;
