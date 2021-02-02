
// -------DatePicker-------
      $(function(){
        $("#datepicker").datepicker({
          format: 'dd-mm-yyyy',
          autoclose: true,
          todayHighlight: true,
        });
      }); 
      $(function(){
        $("#datepicker1").datepicker({
          format: 'dd-mm-yyyy',
          autoclose: true,
          todayHighlight: true,
        });
      });

 //--------Modal PopUp-------
    const modalAdd = document.querySelector('.add');
    const modalBg = document.querySelector('.modal');
    const modalClose = document.querySelector('.close');

    modalAdd.addEventListener('click',(e)=>{
    modalBg.classList.add('modalopen');
    })
    modalClose.addEventListener('click',(e)=>{
    modalBg.classList.remove('modalopen');
    })

    //---------Update Stuff----------//

    //----NavSlide
    const navOpen = document.querySelector('.burger');
    const navShow = document.querySelector('.nav-links');
    navOpen.addEventListener('click',(e)=>{
      navShow.classList.toggle('nav-active');
    })