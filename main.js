const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if (event.code === "Enter"){
        search();
    }
});


function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=AOaemvIGuHTjf4kAQNKFSuCDdBLjpuoQrg%3A1630950561934&source=hp&ei=oVQ2YebgNpm_5OUPqqOIuAc&iflsig=ALs-wAMAAAAAYTZisd8VeiUjj17Re79LjGfTeouCi15o&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMggILhCABBCxAzIICC4QgAQQsQMyBQgAEIAEMggILhCABBCxAzIFCAAQgAQyBQgAEIAEMgUILhCABDILCAAQgAQQsQMQgwEyCAgAEIAEELEDOgQIIxAnOg4ILhCABBCxAxDHARCjAjoRCC4QgAQQsQMQxwEQowIQkwI6DgguEIAEELEDEMcBENEDOgsILhCABBCxAxCDAToLCC4QgAQQsQMQkwI6CwguEIAEEMcBEKMCUMAMWOARYLwVaABwAHgAgAF0iAGMBJIBAzEuNJgBAKABAQ&sclient=gws-wiz&ved=0ahUKEwimtY2n9OryAhWZH7kGHaoRAncQ4dUDCAc&uact=5"
}