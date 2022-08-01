function openSidebar(){
  // modal container
  const modalContainer = document.getElementById('sidebar');

  // boxshadow child of modal container
  const backshadow = document.createElement('div');
  backshadow.className = 'backshadow';

  // modal child of backshadow
  const modal = document.createElement('div');
  modal.className = 'modal';

  // header child of modal
  const header = document.createElement('h2');
  header.className = 'modal-header'
  header.textContent = "CLOSE X";

  header.onclick = function(){
      modal.className = "modal remove";
      backshadow.style.background="rgba(0, 0, 0, 0%)";
      setTimeout(()=>{
        backshadow.style.display = 'none';
      },500)
  }

  // list of items
  const ul = document.createElement('ul');
  ul.className = 'items-box'

  // home li
  const homeLi = document.createElement("li");
  homeLi.className="items";

  const spanHome = document.createElement('span');
  spanHome.textContent = "HOME";
  homeLi.appendChild(spanHome);

  const homeIcon = document.createElement('span');
  homeIcon.className="icons";
  homeIcon.id="home";
  homeLi.appendChild(homeIcon);

  const homeI = document.createElement('i');
  homeI.className="fa-solid fa-greater-than fa-sm";
  homeIcon.appendChild(homeI);

  // shop li
  const shopLi = document.createElement("li");
  shopLi.className="items";

  const spanShop = document.createElement('span');
  spanShop.textContent = "SHOP";
  shopLi.appendChild(spanShop);

  const shopIcon = document.createElement('span');
  shopIcon.className="icons";
  shopIcon.id="shop";
  shopLi.appendChild(shopIcon);

  const shopI = document.createElement('i');
  shopI.className="fa-solid fa-greater-than fa-sm";
  shopIcon.appendChild(shopI);

  // product li
  const productLi = document.createElement("li");
  productLi.className="items";

  const spanProduct = document.createElement('span');
  spanProduct.textContent = "PRODUCT";
  productLi.appendChild(spanProduct);

  const productIcon = document.createElement('span');
  productIcon.className="icons";
  productIcon.id="product";
  productLi.appendChild(productIcon);

  const productI = document.createElement('i');
  productI.className="fa-solid fa-greater-than fa-sm";
  productIcon.appendChild(productI);

  // blog li
  const blogLi = document.createElement("li");
  blogLi.className="items";

  const spanBlog = document.createElement('span');
  spanBlog.textContent = "BLOG";
  blogLi.appendChild(spanBlog);

  const blogIcon = document.createElement('span');
  blogIcon.className="icons";
  blogIcon.id="blog";
  blogLi.appendChild(blogIcon);

  const blogI = document.createElement('i');
  blogI.className="fa-solid fa-greater-than fa-sm";
  blogIcon.appendChild(blogI);

  // page li
  const pageLi = document.createElement("li");
  pageLi.className="items";

  const spanPage = document.createElement('span');
  spanPage.textContent = "Page";
  pageLi.appendChild(spanPage);

  const pageIcon = document.createElement('span');
  pageIcon.className="icons";
  pageIcon.id="page";
  pageLi.appendChild(pageIcon);

  const pageI = document.createElement('i');
  pageI.className="fa-solid fa-greater-than fa-sm";
  pageIcon.appendChild(pageI);


  // ul appending its children
  ul.appendChild(homeLi);
  ul.appendChild(shopLi);
  ul.appendChild(productLi);
  ul.appendChild(blogLi);
  ul.appendChild(pageLi);

  const iconsArray=[homeIcon, shopIcon, productIcon, blogIcon, pageIcon];
  iconsArray.forEach((icon)=>{
      icon.onclick=()=>{
          if(icon.id==='home'){
              const homeContainer=document.createElement('div');
              homeContainer.className='home-container';
              modal.appendChild(homeContainer);
              ul.style.display="none";
              const homeHeader = document.createElement('div');
              homeHeader.className='home-header'
              const headerSpan = document.createElement('span');
              const headerI = document.createElement('i');
              headerI.className="fa-solid fa-less-than fa-sm";
              headerSpan.onclick=()=>{
                  ul.style.display="block";
                  homeContainer.style.display="none";
              }
              headerSpan.appendChild(headerI);
              homeHeader.appendChild(headerSpan);
              const headerText = document.createElement('span');
              headerText.textContent="HOME";
              homeHeader.appendChild(headerText);
              homeContainer.appendChild(homeHeader);

              const homeUl=document.createElement('ul');
              homeUl.className="home-ul";
              homeUl.innerHTML=`
              
                <li class="home-links">Home Clean</li>
                <li class="home-links">Home Collection</li>
                <li class="home-links">Home Minimal</li>
                <li class="home-links">Home Modern</li>

              `;
              homeContainer.appendChild(homeUl);
          }

          else if(icon.id==="shop"){
            const homeContainer=document.createElement('div');
            homeContainer.className='home-container';
            modal.appendChild(homeContainer);
            ul.style.display="none";
            const shopHeader = document.createElement('div');
            shopHeader.className='home-header'
            const shopSpan = document.createElement('span');
            const shopI = document.createElement('i');
            shopI.className="fa-solid fa-less-than fa-sm";
            shopSpan.onclick=()=>{
                ul.style.display="block";
                homeContainer.style.display="none";
            }
            shopSpan.appendChild(shopI);
            shopHeader.appendChild(shopSpan);
            const shopText = document.createElement('span');
            shopText.textContent="SHOP";
            shopHeader.appendChild(shopText);
            homeContainer.appendChild(shopHeader);

            const shopUl=document.createElement('ul');
            shopUl.className="home-ul";
            shopUl.innerHTML=`
            
              <li class="home-links">Shop Standard</li>
              <li class="home-links">Shop Full</li>
              <li class="home-links">Shop Only Categories</li>
              <li class="home-links">Shop Image categories</li>

            `;
            homeContainer.appendChild(shopUl);
          }
          else if(icon.id==="product"){
            const homeContainer=document.createElement('div');
            homeContainer.className='home-container';
            modal.appendChild(homeContainer);
            ul.style.display="none";
            const productHeader = document.createElement('div');
            productHeader.className='home-header'
            const productSpan = document.createElement('span');
            const productI = document.createElement('i');
            productI.className="fa-solid fa-less-than fa-sm";
            productSpan.onclick=()=>{
                ul.style.display="block";
                homeContainer.style.display="none";
            }
            productSpan.appendChild(productI);
            productHeader.appendChild(productSpan);
            const productText = document.createElement('span');
            productText.textContent="PRODUCT";
            productHeader.appendChild(productText);
            homeContainer.appendChild(productHeader);

            const productUl=document.createElement('ul');
            productUl.className="home-ul";
            productUl.innerHTML=`
            
              <li class="home-links">Sticky ATC</li>
              <li class="home-links">Video Inner</li>
              <li class="home-links">360 Degree</li>
              <li class="home-links">CCountdown</li>

            `;
            homeContainer.appendChild(productUl);
          }
      }
  })

  // modal appending its children
  modal.appendChild(header);
  modal.appendChild(ul);

  // backshadow appending modal
  backshadow.appendChild(modal);

  // modal container appending backshadow
  modalContainer.appendChild(backshadow);
}