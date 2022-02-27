let Paginator = (props) =>{


let pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize);
      if(pagesCount>30)  {
          pagesCount = 30
      }
        let pages = [];
        for(let i=1; i <=pagesCount; i++){
            pages.push(i);
        }


    return(
    <div>
    {pages.map(page => {
    return (<span key={page} className={props.currentPage === page && 'selectedPage'}
    onClick={(e) =>{props.onPageChanged(page)}}>{page}</span>)
    })}
    
         
    </div>
    )
}

    export default Paginator;