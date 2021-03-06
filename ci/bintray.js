{
    "package": {
        "name": "plugins",
        "repo": "OpenCPN",
        "subject": "leamas",
        "desc": "bsb4 plugin automatic push",
        "website_url": "www.jfrog.com",
        "issue_tracker_url": "https://github.com/leamas/bsb4_pi/issues",
        "vcs_url": "https://github.com/leamas/bsb4_pi.git",
        "github_use_tag_release_notes": false,
        "licenses": ["GPL2"],
        "labels": [],
        "public_download_numbers": false,
        "public_stats": false,
        "attributes": [{
                "name": "att5",
                "values" : ["2014-12-28T19:43:37+0100"],
                "type": "date"
        }]
    },

    "version": {
        "name": "1.15-0.beta2",
        "desc": "Pre-release based on 5.0.0 beta2",
        "released": "2019-08-18",
        "vcs_tag": "v1.5.0",
        "attributes": [
            {"name": "VerAtt1", "values" : ["VerVal1"], "type": "string"},
            {"name": "VerAtt2", "values" : [1, 3.3, 5], "type": "number"},
            {
                "name": "VerAtt3",
                "values" : ["2015-01-01T19:43:37+0100"],
                "type": "date"
            }
        ],
        "gpgSign": false
    },

    "files":
        [
            {
                "includePattern": "build/(bsb4.*\\.tar.gz)",
                "uploadPattern": "$1",
                "matrixParams": {"override": 1}
            },
             {
                "includePattern": "build/(bsb4-plugin\\.xml)",
                "uploadPattern": "$1",
                "matrixParams": {"override": 1}
            },
            {
                "includePattern": "build/(bsb4-plugin-.*\\.xml)",
                "uploadPattern": "$1",
                "matrixParams": {"override": 1}
            }
         ],
    "publish": true
}
