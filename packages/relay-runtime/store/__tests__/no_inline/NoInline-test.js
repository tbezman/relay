/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * @flow strict-local
 * @format
 */

'use strict';

const {getRequest} = require('../../../query/GraphQLTag');
const {createReaderSelector} = require('../../../store/RelayModernSelector');
const {graphql} = require('relay-runtime/query/GraphQLTag');
const {
  createOperationDescriptor,
} = require('relay-runtime/store/RelayModernOperationDescriptor');
const {createMockEnvironment} = require('relay-test-utils-internal');
const SomeDeeplyNestedFragment = require('./some/deeply/nested/__generated__/SomeDeeplyNestedFragment.graphql');

describe('No Inline w/ Common JS', () => {
  it('can read data', () => {
    const environment = createMockEnvironment();

    const NoInlineTestQuery = graphql`
      query NoInlineTestQuery {
        me {
          ...SomeDeeplyNestedFragment
        }
      }
    `;

    const request = getRequest(NoInlineTestQuery);
    const operation = createOperationDescriptor(request, {});
    environment.commitPayload(operation, {
      me: {
        id: '1',
        name: 'Alice',
      },
    });

    const fragmentSelector = createReaderSelector(
      SomeDeeplyNestedFragment,
      '1',
      {},
      operation.request,
    );

    // $FlowFixMe[unclear-type]
    const {data} = (environment.lookup(fragmentSelector): any);

    expect(data.name).toEqual('Alice');
  });
});
