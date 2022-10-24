
<!-- README.md is generated from README.Rmd. Please edit that file -->

# shinyjster

<!-- badges: start -->

[![R build
status](https://github.com/schloerke/shinyjster/actions/workflows/R-CMD-check.yaml/badge.svg)](https://github.com/schloerke/shinyjster/actions)
<!-- badges: end -->

Run JavaScript testing on Shiny applications. On successful testing,
‘shinyjster’ will auto-kill the Shiny application on a successful test
to speed up manual testing.

## Installation

You can install the released version of shinyjster from
[CRAN](https://CRAN.R-project.org) with:

``` r
install.packages("shinyjster")
```

And the development version from [GitHub](https://github.com/) with:

``` r
# install.packages("devtools")
devtools::install_github("schloerke/shinyjster")
```

## Example

This is a basic example which shows you how to solve a common problem:

``` r
library(shinyjster)
## basic example code
app_dir <- system.file("shinyjster/01-hello", package = "shinyjster")
run_jster(app_dir)
```
