var token = "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEvMjZkMjBmLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2Nzk4MzcxNzYsImV4cCI6MTY3OTg0NDM3NiwibmJmIjoxNjc5ODM3MTcxLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6Inc3NjMwMjM5NDEiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTAwNzEzNDUyNjM0ODA3NTg0NjQyIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ3NzYzMDIzOTQxQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.UF5K-WwG_KaidLMTIOZ__AaLabd1PThTxeC2jKfQnyLfK4LW0BRh04XMrDVl5_kpqdPUwiyOanI8f59NfU5P2AvyBZtjtvvX8r4lEaiqUweHJzl_7b7ltGFGtB3Q8X1AEajMXeSd9u9uZYIrpFlYiFGNYJ8fWJD1Hx8Xq1A5uxvEmzurUgnWoOUWCyut1niBH_N1lcPQGQ1TpbuKvXNOYk-bmX5QyyE20pBTUQsRJhqgpQQ8x05yRItfHxNgws2tPSxAI6I8B4uiQ4wCZkSPfDhiEZ7rhdqq0fLrh47qygfh1GhGNdh2sU6WSIFr0NRGIcKQahTLlqoukfSOnAXV7g";
// var token = "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEvMjZkMjBmLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2Nzk4MzY5NTUsImV4cCI6MTY3OTg0NDE1NSwibmJmIjoxNjc5ODM2OTUwLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6Inc3NjMwMjM5NDEiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTAwNzEzNDUyNjM0ODA3NTg0NjQyIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ3NzYzMDIzOTQxQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.EHZcd3PPyl4gHCC3GOxLf1x2uWmOX7Q2-ZMQo3e7kvVNnKeFKuqvclav6EJ-36Gn74sCp9M6FApIEqGA6A9FKYiDG-zBs2EZB3vQUP420RIA4fACgXz4J19qafrlAlViATaiFjA3niTvBexPouLCmbv4ZcqIBThf19hvlSttIwcl6N9shaSp7IZiaZoNWtRtF2OIzAO48q5vTHLcuzdbMlpHQGHAMZkrMuGoRMZJgw50k8-cDFyh7h1RRA8LytMtDIZfv4rcQeh6QBjD2tWG-hyIV0bM7FlvqQv8lpc7KWQOB4kUkxymuaGdvBjCv5lAfHEVRPScMPAIn3mPmxKUAg";
var token = "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEvYjBiOTQwIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2Nzk4MzcxNzYsImV4cCI6MTY3OTg0NDM3NiwibmJmIjoxNjc5ODM3MTcxLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6Inc3NjMwMjM5NDEiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTAwNzEzNDUyNjM0ODA3NTg0NjQyIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ3NzYzMDIzOTQxQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.CPa3yEYCMC3ggks1kHlQ3bvKye1wp6p7jZu6fw9DnjEqlB_WMsihBToa5aQm98mu22K1sJP0W8GXNwuZ7QyqsdRcdh-RQCz2Wy7T-8zJC1KM5-5X9N5IOA_UltB_hIaQrZ2Tast3pnFh7ZS9G4tQEXBD-QdjvRFSjeR8YWDV8XuGe60QWUrUmXTD0jiMjIK4BPLYcXmmYpf0TV0eS9q-6bX8AUi972aaXhooG38HeBtGOg27YJkFjhqiDYkAAEa2l0KPk1OSygaSthxif20srsSXFhlTVmDPs_0OoAR73tj8OLkaedMAtU3tujZIKc34ow0qq6kvQoROLwUxsKmcag";
export default token;




