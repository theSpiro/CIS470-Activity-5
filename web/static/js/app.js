document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = '/api/users';

    // Use d3.json to load the JSON data
    d3.json(apiUrl).then(data=>{
        renderTable(data);
    });
});

const renderTable= (users)=> {
    
    const userList = d3.select('#userList');
    const table = userList.append('table');

    // Create the header
    const thead = table.append('thead');
    thead.append('tr')
         .selectAll('th')
         .data(['Name', 'Email'])
         .enter()
         .append('th')
         .text(d => d);

    // Create the body
    const tbody = table.append('tbody');

    // Rows are entered in the tbody
    const rows = tbody.selectAll('tr')
                      .data(users)
                      .enter()
                      .append('tr');

    // Cells are entered in each row
    rows.selectAll('td')
        .data(user => [user.name, user.email])
        .enter()
        .append('td')
        .text(d => d);
}
