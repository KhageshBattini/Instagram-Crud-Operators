export const appendData = (data, parentDiv) => {
  parentDiv.innerHTML = "";
  data.forEach(({ title, images }) => {
    // let {title, images}= element;
    let div = document.createElement("div");

    let p = document.createElement("p");
    p.innerText = title;

    let img = document.createElement("img");
    img.src = images;

    div.append(img, p);
    parentDiv.append(div);
  });
};
