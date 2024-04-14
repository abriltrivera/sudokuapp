

function loadPartialView(viewName, divClass = null) {
    $.ajax({
        url: viewName + '.html',
        method: 'GET',
        success: function(data) {
            $(divClass).html(data);
        },
        error: function(xhr, status, error) {
            console.error('Error al cargar la vista parcial', error);
        }
});
}

function saveLocalStorageValue(name, value) {
    window.localStorage.setItem(name, value);
    return console.log(name + " guardado exitosamente.")
}

function getLocalStorageValue(name) {
    return window.localStorage.getItem(name);
}

function removeLocalStorageValue(name) {
    window.localStorage.removeItem(name);
    return console.log(name + " eliminado exitosamente.")
}


