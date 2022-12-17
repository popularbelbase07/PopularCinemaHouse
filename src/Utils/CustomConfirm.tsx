import Swal from "sweetalert2";

export default function CustomConfirm(
    onConfirm: any,
    title: string = "Are you sure?",
    confirmButtonText: string = "Delete")
{
Swal.fire({
        title,
        confirmButtonText,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        timer:2000
    }).then(result => {
        if(result.isConfirmed){
            onConfirm();
        }
    })


}

   