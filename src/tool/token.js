// const token = "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEvMjZkMjBmLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2ODAyNDA5NzIsImV4cCI6MTY4MDI0ODE3MiwibmJmIjoxNjgwMjQwOTY3LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6Inc3NjMwMjM5NDEiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTAwNzEzNDUyNjM0ODA3NTg0NjQyIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ3NzYzMDIzOTQxQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.exY-sxwlNThccEnshBrQEIU-nk6T1mG4mTiXCLRj95ml4wmorIErsR7av0B4aLLnlaqLBkhvLMb50xxrx2t9zxKg-vza3tkzF716a_xIxDYJnJjOF6hlTcoHJtDpIa96V6WvLVc5CMjQZD3byJ1Bj5R0nZyLPPIp1VFlBBtwmmjeMyx8SYyxz8ZiH2qh3gl5a09q7dWKsePGsKE5gm227z89e-RtyOhAcra3nnvTd5orl3ccpBz2-dF4p8rFDByGxSE_EwPOTH_sLoFiD2ggV7wAMT49dqrlFZT8SZyKCamaZkC4JZYIfs4sQnodopuRrq-Pc6qXUyVk5cwEkOFhGw";

// const token = "eyJraWQiOiJ2cGFhcy1tYWdp/ZYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEvZDI5OTM4IiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2ODAyNDA5NzIsImV4cCI6MTY4MDI0ODE3MiwibmJmIjoxNjgwMjQwOTY3LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6Inc3NjMwMjM5NDEiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTAwNzEzNDUyNjM0ODA3NTg0NjQyIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ3NzYzMDIzOTQxQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.HXlaTRM3l3n5F2HQuLtT_eNtfLkARIyJxmdwR--5_2GPR1p49m69c--U_fR4cBcarLP4uuU77xxPq_TRLFzrNmFTL_jA-7KOogovOrwT1vAZzQ2ugCDu7_LSWxTulXYxxrAmhEZ-3xSFN7hYsRtiow4J8DaTTcrQZ8kFh_XiIDsXbk4WZ0N5KyLQob51NyfYpDJU7ssRWydxBOSU1XBuxwY-Jn1Ua3etxT34F12f2Ef6QKrrK3VozbG2xBAXUAJYuMDxxaudsnOazJXP5XaDMpN1chfhDhSVUxvNGMjj_CQqmlb_8-yMnNcqNOQoB46LqDQICwR1EU3W1Os-B9pmeQ";
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZwYWFzLW1hZ2ljLWNvb2tpZS0xYzM1ZTBlYjllNTQ0MTNhOWY0ZjQzNzk3ZWNjYjU1YS9kMjk5MzgifQ.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2ODAyNDM2ODYsImV4cCI6MTY4MDI1MDg4NiwibmJmIjoxNjgwMjQzNjgxLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6Inc3NjMwMjM5NDEiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTAwNzEzNDUyNjM0ODA3NTg0NjQyIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ3NzYzMDIzOTQxQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.O-buUJSOiz_wwIVupZD6YztjskIizMaIeEodxYfoWxyqPyb5QCV-sG6jkTmtmM5K7Z287n58KUKvFLCy-e3gWKSMO31PfiuOwTyKxmb8L0mgPmqPZp-P25J5YHI6rQ0qHDh-ZIyDMfZ50TnS2Zi_dF5V5N7f3KGQSfkNNyROUwawGjJF4VUuEEanOK1HEtP2RIcx6La_8fa1hNMYye2wdwrOTx-W-W6sSBOlKv_PwCeCH7Z82Lh7a8LAYwc07-8XEJWK3Wd7fKfW3JyK9TImqtgj94R7Rc7nDciIAWL08_YLa15HTjfDD70BG0flf2LuHBsqt867qnadJ72di1Zz7w"
// const toekn = "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEvMjZkMjBmLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2ODAyMzg2MzAsImV4cCI6MTY4MDI0NTgzMCwibmJmIjoxNjgwMjM4NjI1LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMWMzNWUwZWI5ZTU0NDEzYTlmNGY0Mzc5N2VjY2I1NWEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6Inc3NjMwMjM5NDEiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTAwNzEzNDUyNjM0ODA3NTg0NjQyIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ3NzYzMDIzOTQxQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.XHmvc4zGOTb1Q9hzNaPz_qmP-fZFr-MdNEE2GKflWhq7K2iS5meGJbF39y3OYuHabKcUqcMtHfD21_t4GIJys84eLewW5D4mOkadp-_jxu2D6OqN3KXyR7cj7Al2snO0VREowuxSkF0omSpjsBLdqx38F2MRSI5jNx8lKrQzPTTcmx8LscwgvKR2DuLEe_Ast2QdKmqQdZEkipJa2X-65ok2uekclvaZQza238He474muoqj0TbZpY2LC9rGb8fGGXUMwpWv3h0cjrAE0zBMYN1SYxxfVvhBKfv5YUJFdr7vThHgQAIA5VShGJVTj7nLNgFNMfPU0cPV8R6oPdhRMw"
export default token;
