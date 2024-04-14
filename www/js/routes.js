
//Declare environment
const local_server = "https://localhost:44386/api/"            //Write localhost and port
const public_server = "https://sudokuapp.bsite.net/api/"       //Write WEB API public address
const local_sources = ""                                       //Write App local resources

const env = public_server                                      //Select your environment (local or public server)

//Users API

const allUsers_route = env + "Users"
const postUser_route = env + "Users/"
const loginUser_route = env + "users/login"
const getUser_route = env + "Users/"
const totalUser_route = env + "Users/GetTotalUsers"
const createUser = env + "Users"
const updateUser = env + "Users/"
const deleteUser = env + "Users/"

