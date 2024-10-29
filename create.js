
let images;
let submit_btn = document.getElementById("submit_btn");
submit_btn.disabled = true;

async function addPost() {
  let title = document.getElementById("title").value;

  let send_this_data = {
    title: title,
    images,
  };

  try {
    let res = await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify(send_this_data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// ----- for image upload ----
let image_api_key = "b4b885a0f366336e71a0a056e42fc758";
const handleImage = async (event) => {
  let file = document.getElementById("image");
  let form = new FormData();

  form.append("image", file.files[0]);

  let response = await fetch(
    `https://api.imgbb.com/1/upload?key=${image_api_key}`,
    {
      method: "POST",
      body: form,
    }
  );
  let data = await response.json();
  console.log("data", data);
  images = data.data.display_url;

  submit_btn.disabled = false;
};

async function deletePost() {
  let id = document.getElementById("delete_id").value;

  try {
    let res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function updatePost() {
  let title = document.getElementById("update_title").value;
  let id = document.getElementById("update_id").value;

  let send_this_data = {
    title,
  };

  try {
    let res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(send_this_data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function replacePost() {
  let title = document.getElementById("replace_title").value;
  let id = document.getElementById("replace_id").value;

  let send_this_data = {
    title,
  };

  try {
    let res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(send_this_data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
