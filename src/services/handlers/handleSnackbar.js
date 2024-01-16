export default class SnackbarService {
    static handleSnackbar(status) {
        const snackbar = {
            show: true,
            text: "",
            color: "",
        };

        if (status === 201) {
            snackbar.text = "Item created successfully";
            snackbar.color = "success";
        } 
        else if (status === 204) {
            snackbar.text = "No content";
            snackbar.color = "yellow-darken-2";
            }
        else {
            snackbar.text = "Something went wrong, please retry later!";
            snackbar.color = "red-darken-2";
        }

        return snackbar;
    }
}
