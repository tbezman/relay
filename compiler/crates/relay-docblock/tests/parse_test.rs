/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<33d8ff21010be3d648977f76f75a2a02>>
 */

mod parse;

use parse::transform_fixture;
use fixture_tests::test_fixture;

#[test]
fn relay_resolver() {
    let input = include_str!("parse/fixtures/relay-resolver.js");
    let expected = include_str!("parse/fixtures/relay-resolver.expected");
    test_fixture(transform_fixture, "relay-resolver.js", "parse/fixtures/relay-resolver.expected", input, expected);
}

#[test]
fn relay_resolver_deprecated() {
    let input = include_str!("parse/fixtures/relay-resolver-deprecated.js");
    let expected = include_str!("parse/fixtures/relay-resolver-deprecated.expected");
    test_fixture(transform_fixture, "relay-resolver-deprecated.js", "parse/fixtures/relay-resolver-deprecated.expected", input, expected);
}

#[test]
fn relay_resolver_deprecated_no_description() {
    let input = include_str!("parse/fixtures/relay-resolver-deprecated-no-description.js");
    let expected = include_str!("parse/fixtures/relay-resolver-deprecated-no-description.expected");
    test_fixture(transform_fixture, "relay-resolver-deprecated-no-description.js", "parse/fixtures/relay-resolver-deprecated-no-description.expected", input, expected);
}

#[test]
fn relay_resolver_invalid_field_invalid() {
    let input = include_str!("parse/fixtures/relay-resolver-invalid-field.invalid.js");
    let expected = include_str!("parse/fixtures/relay-resolver-invalid-field.invalid.expected");
    test_fixture(transform_fixture, "relay-resolver-invalid-field.invalid.js", "parse/fixtures/relay-resolver-invalid-field.invalid.expected", input, expected);
}

#[test]
fn relay_resolver_missing_field_invalid() {
    let input = include_str!("parse/fixtures/relay-resolver-missing-field.invalid.js");
    let expected = include_str!("parse/fixtures/relay-resolver-missing-field.invalid.expected");
    test_fixture(transform_fixture, "relay-resolver-missing-field.invalid.js", "parse/fixtures/relay-resolver-missing-field.invalid.expected", input, expected);
}

#[test]
fn relay_resolver_missing_multiple_fields_invalid() {
    let input = include_str!("parse/fixtures/relay-resolver-missing-multiple-fields.invalid.js");
    let expected = include_str!("parse/fixtures/relay-resolver-missing-multiple-fields.invalid.expected");
    test_fixture(transform_fixture, "relay-resolver-missing-multiple-fields.invalid.js", "parse/fixtures/relay-resolver-missing-multiple-fields.invalid.expected", input, expected);
}

#[test]
fn relay_resolver_on_interface_no_value_invalid() {
    let input = include_str!("parse/fixtures/relay-resolver-on-interface-no-value.invalid.js");
    let expected = include_str!("parse/fixtures/relay-resolver-on-interface-no-value.invalid.expected");
    test_fixture(transform_fixture, "relay-resolver-on-interface-no-value.invalid.js", "parse/fixtures/relay-resolver-on-interface-no-value.invalid.expected", input, expected);
}

#[test]
fn relay_resolver_on_type_and_on_interface_invalid() {
    let input = include_str!("parse/fixtures/relay-resolver-on-type-and-on-interface.invalid.js");
    let expected = include_str!("parse/fixtures/relay-resolver-on-type-and-on-interface.invalid.expected");
    test_fixture(transform_fixture, "relay-resolver-on-type-and-on-interface.invalid.js", "parse/fixtures/relay-resolver-on-type-and-on-interface.invalid.expected", input, expected);
}

#[test]
fn relay_resolver_on_type_no_value_invalid() {
    let input = include_str!("parse/fixtures/relay-resolver-on-type-no-value.invalid.js");
    let expected = include_str!("parse/fixtures/relay-resolver-on-type-no-value.invalid.expected");
    test_fixture(transform_fixture, "relay-resolver-on-type-no-value.invalid.js", "parse/fixtures/relay-resolver-on-type-no-value.invalid.expected", input, expected);
}

#[test]
fn relay_resolver_with_fragment() {
    let input = include_str!("parse/fixtures/relay-resolver-with-fragment.js");
    let expected = include_str!("parse/fixtures/relay-resolver-with-fragment.expected");
    test_fixture(transform_fixture, "relay-resolver-with-fragment.js", "parse/fixtures/relay-resolver-with-fragment.expected", input, expected);
}

#[test]
fn relay_resolver_with_fragment_invalid() {
    let input = include_str!("parse/fixtures/relay-resolver-with-fragment.invalid.js");
    let expected = include_str!("parse/fixtures/relay-resolver-with-fragment.invalid.expected");
    test_fixture(transform_fixture, "relay-resolver-with-fragment.invalid.js", "parse/fixtures/relay-resolver-with-fragment.invalid.expected", input, expected);
}
