# Explain the difference between == and === in JavaScript logic.

== — Loose Equality
The == operator checks if two values are equal in value, but it will automatically convert (coerce) the types before comparing. This is called type coercion.

=== — Strict Equality
The === operator checks if two values are equal in both value AND type. No conversion happens. It is stricter and more predictable.

If we use `==`, JavaScript may automatically convert values and consider different types equal. Using `===` avoids type conversion and checks for an exact match, meaning the selected value must be precisely the same string as the correct answer.