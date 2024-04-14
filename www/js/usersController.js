function register(registerData) {
    $.ajax({
        url: createUser,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(registerData),
        success: function(response) {
            console.table(response);
            let idUser = response.id_User;
            saveLocalStorageValue("id_user", idUser);
            window.location.href = "login.html";
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
        }
    });        
}

function login(formData) {
    $.ajax({
        url: loginUser_route,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
            console.table(response);
            let idUser = response.id_User;
            saveLocalStorageValue("id_user", idUser);

            getUserData(idUser);

            window.location.href = "index.html";
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
        }
    });        
}


function getUserData(id) {
    $.ajax({
        url: getUser_route + id,
        method: 'GET',
        contentType: 'application/json',
        success: function(response) {
            var userName = response.name;
            document.getElementById('input-name').value = userName;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
        }
    });
}


