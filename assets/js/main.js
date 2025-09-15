/**
* Template Name: NiceAdmin
* Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
* Updated: Apr 7 2025 with Bootstrap v5.3.5
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function(e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  /**
   * Initiate quill editors
   */
  if (select('.quill-editor-default')) {
    new Quill('.quill-editor-default', {
      theme: 'snow'
    });
  }

  if (select('.quill-editor-bubble')) {
    new Quill('.quill-editor-bubble', {
      theme: 'bubble'
    });
  }

  if (select('.quill-editor-full')) {
    new Quill(".quill-editor-full", {
      modules: {
        toolbar: [
          [{
            font: []
          }, {
            size: []
          }],
          ["bold", "italic", "underline", "strike"],
          [{
              color: []
            },
            {
              background: []
            }
          ],
          [{
              script: "super"
            },
            {
              script: "sub"
            }
          ],
          [{
              list: "ordered"
            },
            {
              list: "bullet"
            },
            {
              indent: "-1"
            },
            {
              indent: "+1"
            }
          ],
          ["direction", {
            align: []
          }],
          ["link", "image", "video"],
          ["clean"]
        ]
      },
      theme: "snow"
    });
  }

  /**
   * Initiate TinyMCE Editor
   */

  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

  tinymce.init({
    selector: 'textarea.tinymce-editor',
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
    editimage_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    link_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_class_list: [{
        title: 'None',
        value: ''
      },
      {
        title: 'Some class',
        value: 'class-name'
      }
    ],
    importcss_append: true,
    file_picker_callback: (callback, value, meta) => {
      /* Provide file and text for the link dialog */
      if (meta.filetype === 'file') {
        callback('https://www.google.com/logos/google.jpg', {
          text: 'My text'
        });
      }

      /* Provide image and alt text for the image dialog */
      if (meta.filetype === 'image') {
        callback('https://www.google.com/logos/google.jpg', {
          alt: 'My alt text'
        });
      }

      /* Provide alternative source and posted for the media dialog */
      if (meta.filetype === 'media') {
        callback('movie.mp4', {
          source2: 'alt.ogg',
          poster: 'https://www.google.com/logos/google.jpg'
        });
      }
    },
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image table',
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
  });

  /**
   * Initiate Bootstrap validation check
   */
  var needsValidation = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(needsValidation)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

  /**
   * Initiate Datatables
   */
  const datatables = select('.datatable', true)
  datatables.forEach(datatable => {
    new simpleDatatables.DataTable(datatable, {
      perPageSelect: [5, 10, 15, ["All", -1]],
      columns: [{
          select: 2,
          sortSequence: ["desc", "asc"]
        },
        {
          select: 3,
          sortSequence: ["desc"]
        },
        {
          select: 4,
          cellClass: "green",
          headerClass: "red"
        }
      ]
    });
  })

  /**
   * Autoresize echart charts
   */
  const mainContainer = select('#main');
  if (mainContainer) {
    setTimeout(() => {
      new ResizeObserver(function() {
        select('.echart', true).forEach(getEchart => {
          echarts.getInstanceByDom(getEchart).resize();
        })
      }).observe(mainContainer);
    }, 200);
  }

})();


// [ CODE HERE ]

console.log("JavaScript funciona");


// [ FUNCTION HEART RATE ]

function updateHeartRateStatus(value, iconId, statusId) {
  const icon = document.getElementById(iconId);
  const status = document.getElementById(statusId);
  // se não existir na página, sai fora
  if (!icon || !status) return;
  // resetar classes de cor
  icon.classList.remove("text-success", "text-warning", "text-danger");

  if (value >= 60 && value <= 100) {
    status.innerText = "Normal";
    icon.classList.add("text-success");
  } else if (value > 100 && value <= 120) {
    status.innerText = "Attencion";
    icon.classList.add("text-warning");
  } else if (value > 120 && value <= 250) {
    status.innerText = "Critical";
    icon.classList.add("text-danger");
  } else {
    status.innerText = "Read Error";
    icon.classList.add("text-secondary");
  }
}
//simula entrada de dados
updateHeartRateStatus(72, "heartIcon1", "heartStatus1");  
updateHeartRateStatus(110, "heartIcon2", "heartStatus2"); 
updateHeartRateStatus(140, "heartIcon3", "heartStatus3");   
updateHeartRateStatus(1400, "heartIcon4", "heartStatus4");


//  [ FUNCTION BLOOD OXYGEN RATE ]

function updatebloodOxygenStatus(value, iconId, statusId) {
const icon = document.getElementById(iconId);
const status = document.getElementById(statusId);
// se não existir na página, sai fora
if (!icon || !status) return;
// resetar classes de cor
icon.classList.remove("text-success", "text-warning", "text-danger");

if (value >= 95 && value <= 100) {
  status.innerText = "Normal";
  icon.classList.add("text-success");
} else if (value >= 91  && value <= 94) {
  status.innerText = "Attencion";
  icon.classList.add("text-warning");
} else if (value >= 50 && value <= 90) {
  status.innerText = "Critical";
  icon.classList.add("text-danger");
} else {
  status.innerText = "Read Error";
  icon.classList.add("text-secondary");
}
}
//simula entrada de dados
updatebloodOxygenStatus(100, "bloodOxygenIcon1", "bloodOxygenStatus1");  
updatebloodOxygenStatus(100, "bloodOxygenIcon2", "bloodOxygenStatus2"); 
updatebloodOxygenStatus(100, "bloodOxygenIcon3", "bloodOxygenStatus3"); 
updatebloodOxygenStatus(100, "bloodOxygenIcon4", "bloodOxygenStatus4"); 
  

//  [ FUNCTION RESPIRATION RATE ]

function updateRespirationRateStatus(value, iconId, statusId) {
const icon = document.getElementById(iconId);
const status = document.getElementById(statusId);
if (!icon || !status) return;
// se não existir na página, sai fora
if (!icon || !status) return;
// resetar classes de cor
icon.classList.remove("text-success", "text-warning", "text-danger");

if (value >= 12 && value <= 20) {
  status.innerText = "Normal";
  icon.classList.add("text-success");
} else if (value >= 9 && value <= 11 || value >=21 && value <= 24 ) {
  status.innerText = "Attencion";
  icon.classList.add("text-warning");
} else if (value <9 && value >4 || value > 24 && value < 60) {
  status.innerText = "Critical";
  icon.classList.add("text-danger");
} else {
  status.innerText = "Read Error";
  icon.classList.add("text-secondary");
}
}
updateRespirationRateStatus(59, "respirationRateIcon1", "respirationRateStatus1");  
updateRespirationRateStatus(59, "respirationRateIcon2", "respirationRateStatus2"); 
updateRespirationRateStatus(23, "respirationRateIcon3", "respirationRateStatus3"); 
updateRespirationRateStatus(12, "respirationRateIcon4", "respirationRateStatus4"); 


 //  [ FUNCTION SYSTOLIC BLOOD PRESSURE ]

function updateSystolicBloodPressureStatus(value, iconId, statusId) {
const icon = document.getElementById(iconId);
const status = document.getElementById(statusId);
if (!icon || !status) return;
  // se não existir na página, sai fora
  if (!icon || !status) return;
  // resetar classes de cor
  icon.classList.remove("text-success", "text-warning", "text-danger");

  if (value >= 90 && value <= 120) {
    status.innerText = "Normal";
    icon.classList.add("text-success");
  } else if (value >= 121 && value <= 139) {
    status.innerText = "Attencion";
    icon.classList.add("text-warning");
  } else if (value >= 60 && value <= 89 || value >= 140 && value <= 250) {
    status.innerText = "Critical";
    icon.classList.add("text-danger");
  } else {
    status.innerText = "Read Error";
    icon.classList.add("text-secondary");
  }
}
updateSystolicBloodPressureStatus(250, "systolicBloodPressureIcon1", "systolicBloodPressureStatus1");  
updateSystolicBloodPressureStatus(100, "systolicBloodPressureIcon2", "systolicBloodPressureStatus2"); 
updateSystolicBloodPressureStatus(102, "systolicBloodPressureIcon3", "systolicBloodPressureStatus3"); 
updateSystolicBloodPressureStatus(121, "systolicBloodPressureIcon4", "systolicBloodPressureStatus4"); 


//  [ FUNCTION DIASTOLIC BLOOD PRESSURE ]

function updateDiastolicBloodPressureStatus(value, iconId, statusId) {
const icon = document.getElementById(iconId);
const status = document.getElementById(statusId);
if (!icon || !status) return;
  // se não existir na página, sai fora
  if (!icon || !status) return;
  // resetar classes de cor
  icon.classList.remove("text-success", "text-warning", "text-danger");

  if (value >= 60 && value <= 80) {
    status.innerText = "Normal";
    icon.classList.add("text-success");
  } else if (value >= 81 && value <= 89) {
    status.innerText = "Attencion";
    icon.classList.add("text-warning");
  } else if (value >= 40 && value <= 59 || value >= 90 && value <= 150) {
    status.innerText = "Critical";
    icon.classList.add("text-danger");
  } else {
    status.innerText = "Read Error";
    icon.classList.add("text-secondary");
  }
}
updateDiastolicBloodPressureStatus(150, "diastolicBloodPressureIcon1", "diastolicBloodPressureStatus1");  
updateDiastolicBloodPressureStatus(100, "diastolicBloodPressureIcon2", "diastolicBloodPressureStatus2"); 
updateDiastolicBloodPressureStatus(102, "diastolicBloodPressureIcon3", "diastolicBloodPressureStatus3"); 
updateDiastolicBloodPressureStatus(121, "diastolicBloodPressureIcon4", "diastolicBloodPressureStatus4"); 


//  [ FUNCTION BODY TEMPERATURE RATE ]

function updateBodyTemperatureStatus(value, iconId, statusId) {
const icon = document.getElementById(iconId);
const status = document.getElementById(statusId);
if (!icon || !status) return;
// resetar classes de cor + ícones
icon.className = ""; 
icon.classList.add("bi"); // mantém prefixo bi

if (value >= 36 && value <= 37.2) {
status.innerText = "Normal";
icon.classList.add("bi-thermometer-low", "text-success");
} else if ((value >= 35.1 && value <= 35.9) || (value >= 37.3 && value <= 37.7)) {
status.innerText = "Attention";
icon.classList.add("bi-thermometer-half", "text-warning");
} else if (value <= 35.0 && value >=28) {
status.innerText = "Critical";
icon.classList.add("bi-thermometer-snow", "text-primary");
} else if (value >= 37.8 && value <=41) {
status.innerText = "Critical";
icon.classList.add("bi-thermometer-high", "text-danger");
} else {
status.innerText = "Read Error";
icon.classList.add("bi-thermometer", "text-secondary");
}
}
updateBodyTemperatureStatus(36, "bodyTemperatureIcon1", "bodyTemperatureStatus1");  
updateBodyTemperatureStatus(38, "bodyTemperatureIcon2", "bodyTemperatureStatus2"); 
updateBodyTemperatureStatus(35, "bodyTemperatureIcon3", "bodyTemperatureStatus3"); 
updateBodyTemperatureStatus(35.1, "bodyTemperatureIcon4", "bodyTemperatureStatus4"); 


  


   