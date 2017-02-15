EXAMPLE REQUEST
GET /connection/4/transactions/789 HTTP/1.1
Accept: application/json
Authorization: Bearer czZCaGRSa3F0MzpnWDFmQmF0M2JW
EXAMPLE RESPONSE
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-cache, no-store

{
  "type": "transaction",
  "id": "789",
  "status": "posted",
  "description": "ADOBE  CREATIVE CLOUD    800-833-6687IRL",
  "postDate": "2016-01-01",
  "transactionDate": null,
  "amount": "-$139.98",
  "balance": "$356.50",
  "transactionType": "online-payment",
  "institution": {
    "type": "institution",
    "id": "AU00101",
    "links": {
      "self": "https://au-api.basiq.io/institutions/AU00101"
    }
  },
  "connection": {
    "type": "connection",
    "id": "4",
    "links": {
      "self": "https://au-api.basiq.io/connections/4"
    }
  },
  "account": {
    "type": "account",
    "id": "5",
    "links": {
      "self": "https://au-api.basiq.io/connections/4/accounts/5"
    }
  },
  "links": {
    "self": "https://au-api.basiq.io/connections/4/transactions/789"
  }
}