DEFINITION
GET https://au-api.basiq.io/institutions
EXAMPLE REQUEST
GET /institutions HTTP/1.1
Accept: application/json
Authorization: Bearer czZCaGRSa3F0MzpnWDFmQmF0M2JW
EXAMPLE RESPONSE
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-cache, no-store

{
  "type": "list",
  "totalCount": 186,
  "data": [
    {
      "type": "institution",
      "id": "AU00101",
      "links": {
        "self": "https://au-api.basiq.io/institutions/AU00101"
      }
    },
    {
      "type": "institution",
      "id": "AU00102",
      "links": {
        "self": "https://au-api.basiq.io/institutions/AU00102"
      }
    },
    {
      "type": "institution",
      "id": "AU00103",
      "links": {
        "self": "https://au-api.basiq.io/institutions/AU00103"
      }
    },
    {
      "type": "institution",
      "id": "AU00104",
      "links": {
        "self": "https://au-api.basiq.io/institutions/AU00104"
      }
    },
    {
      "type": "institution",
      "id": "AU00105",
      "links": {
        "self": "https://au-api.basiq.io/institutions/AU00105"
      }
    }
  ],
  "links": {
    "self": "https://au-api.basiq.io/institutions?offset=1",
    "first": "https://au-api.basiq.io/institutions?offset=1",
    "prev": null,
    "next": "https://au-api.basiq.io/institutions?offset=2",
    "last": "https://au-api.basiq.io/institutions?offset=2"
  }
}

