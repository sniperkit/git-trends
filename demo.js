{
    "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
    "description": "A ranged dot plot that uses 'layer' to convey changing life expectancy for the five most populous countries (between 1955 and 2000).",
    "width": 600,
    "height": 400,
    "data": {
        "url": "data/countries.json",
        "format": {
            "type": "json"
        }
    },
    "transform": [{
            "filter": {
                "field": "country",
                "oneOf": [
                    "India",
                    "Indonesia"
                ]
            }
        },
        {
            "filter": {
                "field": "year",
                "oneOf": [
                    1955,
                    2000
                ]
            }
        }
    ],
    "encoding": {
        "x": {
            "field": "life_expect",
            "type": "quantitative",
            "axis": {
                "title": "Life Expectancy (years)"
            }
        },
        "y": {
            "field": "country",
            "type": "nominal",
            "axis": {
                "title": "Time",
                "offset": 5,
                "ticks": false,
                "minExtent": 10,
                "domain": false
            }
        }
    },
    "layer": [{
            "mark": "line",
            "encoding": {
                "detail": {
                    "field": "country",
                    "type": "nominal"
                },
                "color": {
                    "value": "#db646f"
                }
            }
        },
        {
            "mark": {
                "type": "point",
                "filled": true
            },
            "encoding": {
                "color": {
                    "field": "year",
                    "type": "ordinal",
                    "scale": {
                        "domain": [
                            "Pre",
                            "Post"
                        ],
                        "range": [
                            "#e6959c",
                            "#911a24"
                        ]
                    },
                    "legend": {
                        "title": "Year"
                    }
                },
                "size": {
                    "value": 100
                },
                "opacity": {
                    "value": 1
                }
            }
        }
    ]
}