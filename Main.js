let f = async () => {
  let res = await axios({
    method: "get",
    url: "https://api.thecatapi.com/v1/images/search?size=full",
  });

  document.getElementById("cat").src = res.data[0].url;
};

f();

document.cookie = "user=1234";
