In a factory a printer prints labels for boxes. For one kind of box the printer has to use colors which, for the sake of simplicity, are named with letters from `a` to `m`.

The colors used by the printer are recorded in a control string. For example a "good" control string would be `aaabbbbhaijjjm`, meaning that the printer used three times color `a`, four times color `b`, one time color `h`, then one time color `a`, and so on.

Sometimes there are problems: lack of colors, technical malfunction, and a "bad" control string is produced, for example `aaaxbbbbyyhwawiwjjjwwm`, with letters not from `a` to `m`.

You have to write a function `printerError` which, given a string, will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator is the length of the control string. Do not reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from `a` to `z`.

## Examples

```text
s = "aaabbbbhaijjjm"
printerError(s) => "0/14"

s = "aaaxbbbbyyhwawiwjjjwwm"
printerError(s) => "8/22"
```
