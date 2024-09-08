
const ul = document.querySelector("ul");
const input = ul.querySelector("input");
const countNumb = document.querySelector(".details span");
let maxTags = 10,
    tags = [];

countTag();

function countTag() {
    input.focus();
    countNumb.innerHTML = maxTags - tags.length;  //substracting max value with tags length
}


function createTag() {
    // removing all tags before adding so there will be no dulicate tags
    ul.querySelectorAll("li").forEach(li => li.remove());
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li>${tag} <i class="fas fa-multiply" onclick = "remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);  //inserting or adding li inside ul tag

    });
    countTag();
}


function remove(element, tag) {
    let index = tags.indexOf(tag);   //getting removing tag index
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];  //removing or excluding  selected tag from an array
    element.parentElement.remove();  //removing li of removed tag
    countTag();
}


function addTag(e) {
    if (e.key == "Enter") {
        let tag = e.target.value.replace(/\$+/g, '  ');   //removing unwanted spaces from user tag
        if (tag.length > 1 && !tags.includes(tag)) {    //if tag is greater than 1 and tag is not existed
            if (tags.length < 10) {    // if tags length is less than 10 then only add tag
                tag.split(',').forEach(tag => { //Spliting each tag from comma {,}
                    tags.push(tag);  //adding Each tag inside array
                    createTag();
                })
            }
        }
        e.target.value = "";
    }
}



input.addEventListener("keyup", addTag);
const removeBtn = document.querySelector("button");
removeBtn.addEventListener("click", () => {
    tags.length = 0; //making array empty
    ul.querySelectorAll("li").forEach(li => li.remove()); //removing all li tags
    countTag();
});



// .....................................................
// if I want to add more that 10 tags you should  put out tag.split up to createTag and remove if condition that say if(tags.length < 10)

