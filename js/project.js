

let dataProject = [];


function addProject(event) {
  event.preventDefault();
  let projectName = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-project-start-date").value;
  let endDate = document.getElementById("input-project-end-date").value;
  let description = document.getElementById("input-project-description").value;
  let image = document.getElementById("input-project-image").files;

  function getDifferenceTimeInput() {
    let startDate = document.getElementById("input-project-start-date").value
    let startToMilliseconds = new Date(startDate).getTime();
    console.log(startToMilliseconds);
    let endDate = document.getElementById("input-project-end-date").value;
    let endToMilliseconds = new Date(endDate).getTime();
    console.log(endToMilliseconds);
    let selisih = endToMilliseconds - startToMilliseconds;
    let durasiHari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    console.log(durasiHari);
    let durasiMinggu = Math.floor(selisih / (1000 * 60 * 60 * 24 * 7));
    console.log(durasiMinggu);
    let durasiBulan = Math.floor(selisih / (1000 * 60 * 60 * 24 * 7 * 4));
    console.log(durasiBulan);
    let durasiTahun = Math.floor(selisih / (1000 * 60 * 60 * 24 * 7 * 4 * 12));
    console.log(durasiTahun);

    // return `${durasiTahun} Tahun, ${durasiBulan} Bulan, ${durasiMinggu} Minggu, ${durasiHari} Hari`;

    if (durasiTahun > 0) {
      return `${durasiTahun} Tahun / ${durasiBulan} Bulan / ${durasiMinggu} Minggu / ${durasiHari} Hari`;
    } else if (durasiBulan > 0) {
      return `${durasiBulan} Bulan / ${durasiMinggu} Minggu / ${durasiHari} Hari`;
    } if (durasiMinggu > 0) {
      return `${durasiMinggu} Minggu / ${durasiHari} Hari`;
    } if (durasiHari > 0) {
      return `${durasiHari} Hari`
    }
  }

  let duration = getDifferenceTimeInput();

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
    duration,
    description,
    nodeIconCheck,
    nextIconCheck,
    reactIconCheck,
    typeIconCheck,
    image,
    postAt: new Date(),
  };

  dataProject.push(project);
  console.log(dataProject);

  renderProject();
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
                <p class="detail-img">durasi : ${dataProject[index].duration}</p>
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
                <div style="float: right; margin: 0px">
                <p style= "color: grey; font-size: 10px">
                    ${getDistanceTime(dataProject[index].postAt)}
                </p>
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

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  // waktu sekarang - waktu post
  let distance = timeNow - timePost; // hasilnya milidetik
  console.log(distance);

  let milisecond = 1000 // milisecond
  let secondInHours = 3600 // 1 jam 3600 detik
  let hoursInDays = 24 // 1 hari 24 jam

  let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDays)); // 1/86400000
  console.log(distanceDay);

  let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1 / 3600000
  let distanceMinutes = Math.floor(distance / (milisecond * 60)); // 1/60000
  let distanceSecond = Math.floor(distance / milisecond); // 1/1000

  if (distanceDay > 0) {
    return `${distanceDay} Day Ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} Hours Ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} Minutes Ago`;
  } else {
    return `${distanceSecond} Seconds Ago`
  }
}

// setInterval(function () {
//   renderProject();
// }, 2000);

