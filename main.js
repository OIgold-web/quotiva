const products = document.getElementById('products');
const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const moreBtn = document.getElementById('more-btn');
const donate = document.getElementById('donate');
//--------refrences------
  const foryou = document.getElementById('foryou');
  const success = document.getElementById('success');
  const life = document.getElementById('life');
  const faith = document.getElementById('faith');
  const love = document.getElementById('love');
  const study = document.getElementById('study');
  


//------------image quotes-----------------
let keyword = '';
let page = 1;

async function fetchImg(){
  try{
    if(searchBox.value == ''){
      if(keyword == ''){
         keyword = "quotes";
      }else{
        foryou.addEventListener('click', () => {
          keyword = 'quotes';
        })
        success.addEventListener('click', () => {
          keyword = 'Successquotes';
        })
        life.addEventListener('click', () => {
          keyword = 'lifequotes';
        })
        faith.addEventListener('click', () => {
          keyword = 'faithquotes';
        })
        love.addEventListener('click', () => {
          keyword = 'lovequotes';
        })
        study.addEventListener('click', () => {
          keyword = 'studyquotes';
        })
      }
    }else{
      keyword = searchBox.value + "quotes";
    }
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=RrqyvCmMDZjnSaL8EOIqEmli-IeXfQ1UiN8ot2_psDI&page=${page}&per_page=10`);
    
   if(page == 1){
      products.innerHTML = "";
    }
    
    if(!res.ok){
      throw new Error('sorry');
    }
    else{
      const data = await res.json();
      const results = data.results;
      
      results.map((result) =>{
        const product = document.createElement('div');
        const productImg = result.urls.small;
        const productImgId = result.urls.small;
        const productId = result.id;
        const by = result.user.first_name;
        const downloadLink = result.links.download;
        const selfLink = result.links.self;
        product.innerHTML =`
                             <div id="${productId}">
                              <img src="${productImg}" id="${productImgId}" class="img">
                              <div class="description">
                                <p class="p1">By:</p>
                                <p class="p2">${by}<span style="color:deepskyblue;">--<i style="color:green;font-size:1px;">unsplash.com</i></p>
                                <!--<div class="downloadbutton">
                                 <button class="b1" id="${downloadLink}"><a href="" download="" id="${downloadLink}">download</a></button>
                                </div>-->
                              </div>
                             </div>
                           `
        products.appendChild(product);
        
        const activeProduct = document.getElementById(`${productId}`);
        const activeImg = document.getElementById(`${productImgId}`);
        
        activeProduct.addEventListener('click', ()=>{
          activeProduct.classList.add('activeProduct');
          activeImg.classList.add('activeImg');
          activeProduct.querySelector('.p1').style = 'display:none;';
          activeProduct.querySelector('.p2').style = 'display:none;';
          document.querySelector('.buttons').style.display = 'block';
          //document.querySelector('.downloadbutton').style.display = 'block';
          document.querySelector('.more').style.display = 'none';
        })
        
        document.querySelector('.b2').addEventListener('click', ()=>{
          activeProduct.classList.remove('activeProduct');
          activeImg.classList.remove('activeImg');
          activeImg.classList.add('img');
          activeProduct.querySelector('.p1').style = 'font-size: 12px; font-weight:none; display:block;';
          activeProduct.querySelector('.p2').style = 'font-size: 12px; font-weight:none; display:block;';
          document.querySelector('.buttons').style.display = 'none';
          //document.querySelector('.downloadbutton').style = 'display:none;';
          document.querySelector('.more').style.display = 'block';
        })
        

        /*document.getElementById(`${downloadLink}`).addEventListener('click', ()=>{
          document.querySelector('.downloadbutton').style.display = 'block';
        })*/
      
        //console.log(result.links.download_location);
      })
      
    }
  }catch(error){
    console.log(error);
  }
}
searchForm.addEventListener('submit',(e) => {
  e.preventDefault();
  page = 1;
  fetchImg();
  foryou.classList.add('active-category');
   success.classList.remove('active-category');
   life.classList.remove('active-category');
   faith.classList.remove('active-category');
   love.classList.remove('active-category');
   study.classList.remove('active-category');
})
if(searchBox.value == ''){

 //-------events---------
 foryou.addEventListener('click', (e)=>{
   foryou.classList.add('active-category');
   success.classList.remove('active-category');
   life.classList.remove('active-category');
   faith.classList.remove('active-category');
   love.classList.remove('active-category');
   study.classList.remove('active-category');
   e.preventDefault();
  page = 1;
   fetchImg();
 })
 success.addEventListener('click', (e)=>{
   foryou.classList.remove('active-category');
   success.classList.add('active-category');
   life.classList.remove('active-category');
   faith.classList.remove('active-category');
   love.classList.remove('active-category');
   study.classList.remove('active-category');
   e.preventDefault();
   page = 1;
   fetchImg();
 })
 life.addEventListener('click', (e) => {
   foryou.classList.remove('active-category');
   success.classList.remove('active-category');
   life.classList.add('active-category');
   faith.classList.remove('active-category');
   love.classList.remove('active-category');
   study.classList.remove('active-category');
   e.preventDefault();
   page = 1;
   fetchImg();
 })
 faith.addEventListener('click', (e) => {
   foryou.classList.remove('active-category');
   success.classList.remove('active-category');
   life.classList.remove('active-category');
   faith.classList.add('active-category');
   love.classList.remove('active-category');
   study.classList.remove('active-category');
   e.preventDefault();
   page = 1;
   fetchImg();
 })
 love.addEventListener('click', (e) => {
   foryou.classList.remove('active-category');
   success.classList.remove('active-category');
   life.classList.remove('active-category');
   faith.classList.remove('active-category');
   love.classList.add('active-category');
   study.classList.remove('active-category');
   e.preventDefault();
   page = 1;
   fetchImg();
 })
 study.addEventListener('click', (e) => {
   foryou.classList.remove('active-category');
   success.classList.remove('active-category');
   life.classList.remove('active-category');
   faith.classList.remove('active-category');
   love.classList.remove('active-category');
   study.classList.add('active-category');
   e.preventDefault();
   page = 1;
   fetchImg();
 })
 fetchImg();
}

moreBtn.addEventListener('click', () => {
  page++;
  fetchImg();
})

donate.addEventListener('click', ()=>{
  window.open('https://ko-fi.com/quotiva')
})
//https://ab6123e4.mobsted.com/pwa/?appid=15
//<img src='https://ab6123e4-admin.mobsted.com/api/v8/qr/imagehex?text=https://ab6123e4.mobsted.com/pwa/?appid=15' />

