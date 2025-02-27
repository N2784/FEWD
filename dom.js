// Real DOM vs Virtual DOM

const container = document.createElement('div');
container.style.border = '2px solid black';
container.style.padding = '10px';
container.style.margin = '10px';
container.style.display = 'inline-block';
document.body.appendChild(container);

// Real DOM Example
const realDiv = document.createElement('div');
realDiv.id = "real";
realDiv.innerHTML = "Initial Real DOM";
const realBtn = document.createElement('button');
realBtn.innerText = "Update Real DOM";
realBtn.onclick = () => {
    realDiv.innerHTML = "Updated Real DOM! " + Math.random();
};

// Virtual DOM Example
let virtualDOM = { content: "Initial Virtual DOM" };
const virtualDiv = document.createElement('div');
virtualDiv.id = "virtual";
virtualDiv.innerHTML = virtualDOM.content;
const virtualBtn = document.createElement('button');
virtualBtn.innerText = "Update Virtual DOM";
virtualBtn.onclick = () => {
    let newVirtualDOM = { content: "Updated Virtual DOM! " + Math.random() };
    if (virtualDOM.content !== newVirtualDOM.content) {
        virtualDOM = newVirtualDOM;
        virtualDiv.innerHTML = virtualDOM.content;
    }
};

container.appendChild(realDiv);
container.appendChild(realBtn);
container.appendChild(document.createElement('hr'));
container.appendChild(virtualDiv);
container.appendChild(virtualBtn);
 