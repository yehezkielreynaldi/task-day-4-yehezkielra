

let dataProject = [];

function addProject(event) {
  event.preventDefault();
  let projectName = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-project-start-date").value;
  let endDate = document.getElementById("input-project-end-date").value;
  let description = document.getElementById("input-project-description").value;
  // let tech1 = document.getElementById("tech1").checked;
  // let tech2 = document.getElementById("tech2").checked;
  // let tech3 = document.getElementById("tech3").checked;
  // let tech4 = document.getElementById("tech4").checked;
  let image = document.getElementById("input-project-image").files;

  const nodeIcon = `<img src="assets/img/Node JS.png" alt="gambar-node" />`;
  const nextIcon = `<img src="assets/img/nextjs.png" alt="gambar-next" />`;
  const reactIcon = `<img src="assets/img/reactjs.png" alt="gambar-react" />`;
  const typeIcon = `<img src="assets/img/ts.png" alt="gambar-type" />`;


  let nodeIconCheck = document.getElementById("tech1").checked ? nodeIcon : "";
  let nextIconCheck = document.getElementById("tech2").checked ? nextIcon : "";
  let reactIconCheck = document.getElementById("tech3").checked ? reactIcon : "";
  let typeIconCheck = document.getElementById("tech4").checked ? typeIcon : "";

  // untuk membuat url gambar, agar tampil
  image = URL.createObjectURL(image[0]);
  console.log(image);

  let project = {
    projectName,
    startDate,
    endDate,
    description,
    nodeIconCheck,
    nextIconCheck,
    reactIconCheck,
    typeIconCheck,
    image,
  };

  dataProject.push(project);
  console.log(dataProject);

  renderProject()
}



function renderProject() {

  document.getElementById("gridd").innerHTML = "";
  for (let index = 0; index < dataProject.length; index++) {
    document.getElementById("gridd").innerHTML += `
            <article>
              <img
                class="img-project"
                src="${dataProject[index].image}"
                alt="gmbr-hp"
              />
              <div class="content">
                <h5>
                  <a href="project-detail.html" target="_blank"
                    >${dataProject[index].projectName}</a
                  >
                </h5>
                <p class="detail-img">durasi : ${dataProject[index].startDate} | ${dataProject[index].endDate}</p>
                <p class="caption">
                  ${dataProject[index].description}
                </p>
                <div class="icon-linked-app" style="width: 50px">
                  <div class="nodejs">
                    ${dataProject[index].nodeIconCheck}
                  </div>
                  <div class="nextjs">
                    ${dataProject[index].nextIconCheck}
                  </div>
                  <div class="reactjs">
                    ${dataProject[index].reactIconCheck}
                  </div>
                  <div class="typescript">
                    ${dataProject[index].typeIconCheck}
                  </div>
                </div>
                <div class="btn-group">
                  <button class="btn-edit">edit</button>
                  <button class="btn-delete">delete</button>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
        `;

  }
}

function formWajibIsi() {
  let projectName = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-project-start-date").value;
  let endDate = document.getElementById("input-project-end-date").value;
  let description = document.getElementById("input-project-description").value;
  let image = document.getElementById("input-project-image").value;

  if (projectName == "") {
    return alert("Project Name Cannot Empty !");
  } else if (startDate == "") {
    return alert("Start Date Project Cannot Empty !");
  } else if (endDate == "") {
    return alert("End Date Project Cannot Empty !");
  } else if (description == "") {
    return alert("Description Project Cannot Empty !");
  } else if (image == "") {
    return alert("Insert Your Project Image, Please ! ");
  }
};