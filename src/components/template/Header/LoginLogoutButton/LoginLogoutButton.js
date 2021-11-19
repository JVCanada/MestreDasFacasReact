import React, { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import useLogin from "../../../../hooks/useLogin";
import { ReactComponent as User } from '../../../../assets/icons/user.svg'



function LoginLogoutButton(props) {
    const { isAuthenticated, userId, token, logout, refreshPage } = useLogin()
    const URL = `http://localhost:8080/customers/${userId}`
    const [userName, setUserName] = useState("")


    const getUser = () => {
        return axios.get(URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            let name = response.data.name
            let nameArr = name.split(" ")
            return nameArr[0]
        }).catch(error => {
            logout()
        })

    }



    getUser().then((response) => { setUserName(response) })


    if (!isAuthenticated()) {
        return (
            <Link to="/login">
                <svg width="97"
                    height="37" viewBox="0 0 109 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.3353 10.6667C10.3353 7.72116 12.6494 5.33334 15.5039 5.33334C18.3585 5.33334 20.6725 7.72116 20.6725 10.6667C20.6725 13.6122 18.3585 16 15.5039 16C14.1331 16 12.8184 15.4381 11.8491 14.4379C10.8798 13.4377 10.3353 12.0812 10.3353 10.6667ZM25.699 24.7333L23.8383 20.88C23.1809 19.5211 21.8343 18.6637 20.3624 18.6667H10.6454C9.17351 18.6637 7.82695 19.5211 7.16951 20.88L5.3088 24.7333C5.10727 25.146 5.1272 25.637 5.36148 26.0308C5.59575 26.4247 6.01097 26.6653 6.45882 26.6667H24.549C24.9968 26.6653 25.4121 26.4247 25.6463 26.0308C25.8806 25.637 25.9006 25.146 25.699 24.7333Z"
                        fill="#FFC07F" />
                    <path
                        d="M38.616 13.16C38.552 13.192 38.552 13.224 38.616 13.256C39.6293 13.7787 40.136 14.648 40.136 15.864C40.136 16.8987 39.784 17.6827 39.08 18.216C38.376 18.7387 37.4533 19 36.312 19H32.168C32.1147 19 32.0667 18.984 32.024 18.952C31.992 18.9093 31.976 18.8613 31.976 18.808V7.992C31.976 7.93867 31.992 7.896 32.024 7.864C32.0667 7.82133 32.1147 7.8 32.168 7.8H36.184C38.712 7.8 39.976 8.824 39.976 10.872C39.976 11.9387 39.5227 12.7013 38.616 13.16ZM34.312 9.736C34.2587 9.736 34.232 9.76267 34.232 9.816V12.312C34.232 12.3653 34.2587 12.392 34.312 12.392H36.184C36.6853 12.392 37.0747 12.2747 37.352 12.04C37.6293 11.8053 37.768 11.4853 37.768 11.08C37.768 10.664 37.6293 10.3387 37.352 10.104C37.0747 9.85867 36.6853 9.736 36.184 9.736H34.312ZM36.312 17.048C36.8027 17.048 37.1867 16.9253 37.464 16.68C37.7413 16.424 37.88 16.0773 37.88 15.64C37.88 15.2027 37.7413 14.8613 37.464 14.616C37.1867 14.36 36.7973 14.232 36.296 14.232H34.312C34.2587 14.232 34.232 14.2587 34.232 14.312V16.968C34.232 17.0213 34.2587 17.048 34.312 17.048H36.312ZM49.0339 14.04C49.0979 14.4453 49.1192 14.8987 49.0979 15.4C49.0872 15.528 49.0179 15.592 48.8899 15.592H43.9459C43.8819 15.592 43.8605 15.6187 43.8819 15.672C43.9139 15.8853 43.9725 16.0987 44.0579 16.312C44.3352 16.9093 44.9005 17.208 45.7539 17.208C46.4365 17.1973 46.9752 16.92 47.3699 16.376C47.4125 16.312 47.4605 16.28 47.5139 16.28C47.5459 16.28 47.5832 16.3013 47.6259 16.344L48.7779 17.48C48.8312 17.5333 48.8579 17.5813 48.8579 17.624C48.8579 17.6453 48.8365 17.688 48.7939 17.752C48.4419 18.1893 47.9885 18.5307 47.4339 18.776C46.8792 19.0107 46.2712 19.128 45.6099 19.128C44.6925 19.128 43.9139 18.92 43.2739 18.504C42.6445 18.088 42.1912 17.5067 41.9139 16.76C41.6899 16.2267 41.5779 15.528 41.5779 14.664C41.5779 14.0773 41.6579 13.56 41.8179 13.112C42.0632 12.3547 42.4899 11.752 43.0979 11.304C43.7165 10.856 44.4472 10.632 45.2899 10.632C46.3565 10.632 47.2099 10.9413 47.8499 11.56C48.5005 12.1787 48.8952 13.0053 49.0339 14.04ZM45.3059 12.584C44.6339 12.584 44.1912 12.8987 43.9779 13.528C43.9352 13.6667 43.8979 13.8373 43.8659 14.04C43.8659 14.0933 43.8925 14.12 43.9459 14.12H46.7139C46.7779 14.12 46.7992 14.0933 46.7779 14.04C46.7245 13.7307 46.6979 13.5813 46.6979 13.592C46.6019 13.272 46.4312 13.0267 46.1859 12.856C45.9512 12.6747 45.6579 12.584 45.3059 12.584ZM59.6083 10.648C60.4403 10.648 61.0909 10.8987 61.5603 11.4C62.0296 11.9013 62.2643 12.6053 62.2643 13.512V18.808C62.2643 18.8613 62.2429 18.9093 62.2003 18.952C62.1683 18.984 62.1256 19 62.0723 19H60.2003C60.1469 19 60.0989 18.984 60.0563 18.952C60.0243 18.9093 60.0083 18.8613 60.0083 18.808V14.008C60.0083 13.5707 59.8963 13.224 59.6723 12.968C59.4483 12.712 59.1496 12.584 58.7763 12.584C58.4029 12.584 58.0989 12.712 57.8643 12.968C57.6296 13.224 57.5123 13.5653 57.5123 13.992V18.808C57.5123 18.8613 57.4909 18.9093 57.4483 18.952C57.4163 18.984 57.3736 19 57.3203 19H55.4643C55.4109 19 55.3629 18.984 55.3203 18.952C55.2883 18.9093 55.2723 18.8613 55.2723 18.808V14.008C55.2723 13.5813 55.1549 13.24 54.9203 12.984C54.6856 12.7173 54.3816 12.584 54.0083 12.584C53.6669 12.584 53.3789 12.6853 53.1443 12.888C52.9203 13.0907 52.7869 13.3733 52.7443 13.736V18.808C52.7443 18.8613 52.7229 18.9093 52.6803 18.952C52.6483 18.984 52.6056 19 52.5523 19H50.6803C50.6269 19 50.5789 18.984 50.5363 18.952C50.5043 18.9093 50.4883 18.8613 50.4883 18.808V10.968C50.4883 10.9147 50.5043 10.872 50.5363 10.84C50.5789 10.7973 50.6269 10.776 50.6803 10.776H52.5523C52.6056 10.776 52.6483 10.7973 52.6803 10.84C52.7229 10.872 52.7443 10.9147 52.7443 10.968V11.592C52.7443 11.624 52.7549 11.6453 52.7763 11.656C52.7976 11.6667 52.8189 11.656 52.8403 11.624C53.2776 10.9733 53.9549 10.648 54.8723 10.648C55.4056 10.648 55.8696 10.76 56.2643 10.984C56.6696 11.208 56.9789 11.528 57.1923 11.944C57.2243 12.008 57.2616 12.008 57.3043 11.944C57.5389 11.5067 57.8536 11.1813 58.2483 10.968C58.6536 10.7547 59.1069 10.648 59.6083 10.648ZM63.6248 15.24C63.5714 15.24 63.5234 15.224 63.4808 15.192C63.4488 15.1493 63.4328 15.1013 63.4328 15.048V13.496C63.4328 13.4427 63.4488 13.4 63.4808 13.368C63.5234 13.3253 63.5714 13.304 63.6248 13.304H68.8568C68.9101 13.304 68.9528 13.3253 68.9848 13.368C69.0274 13.4 69.0488 13.4427 69.0488 13.496V15.048C69.0488 15.1013 69.0274 15.1493 68.9848 15.192C68.9528 15.224 68.9101 15.24 68.8568 15.24H63.6248ZM72.1825 19C72.0758 19 72.0065 18.9467 71.9745 18.84L69.4145 10.984C69.4038 10.9627 69.3985 10.936 69.3985 10.904C69.3985 10.808 69.4572 10.76 69.5745 10.76H71.6385C71.7558 10.76 71.8305 10.8133 71.8625 10.92L73.1745 15.768C73.1852 15.8 73.2012 15.816 73.2225 15.816C73.2438 15.816 73.2598 15.8 73.2705 15.768L74.5825 10.92C74.6145 10.8133 74.6892 10.76 74.8065 10.76L76.8705 10.792C76.9345 10.792 76.9825 10.8133 77.0145 10.856C77.0465 10.888 77.0518 10.9413 77.0305 11.016L74.4865 18.84C74.4545 18.9467 74.3852 19 74.2785 19H72.1825ZM79.423 9.848C79.0603 9.848 78.7563 9.73067 78.511 9.496C78.2763 9.25067 78.159 8.94667 78.159 8.584C78.159 8.21067 78.2763 7.90667 78.511 7.672C78.7457 7.43733 79.0497 7.32 79.423 7.32C79.7963 7.32 80.1003 7.43733 80.335 7.672C80.5697 7.90667 80.687 8.21067 80.687 8.584C80.687 8.94667 80.5643 9.25067 80.319 9.496C80.0843 9.73067 79.7857 9.848 79.423 9.848ZM78.463 19C78.4097 19 78.3617 18.984 78.319 18.952C78.287 18.9093 78.271 18.8613 78.271 18.808V10.952C78.271 10.8987 78.287 10.856 78.319 10.824C78.3617 10.7813 78.4097 10.76 78.463 10.76H80.335C80.3883 10.76 80.431 10.7813 80.463 10.824C80.5057 10.856 80.527 10.8987 80.527 10.952V18.808C80.527 18.8613 80.5057 18.9093 80.463 18.952C80.431 18.984 80.3883 19 80.335 19H78.463ZM86.5731 10.648C87.4265 10.648 88.1145 10.9093 88.6371 11.432C89.1598 11.9547 89.4211 12.664 89.4211 13.56V18.808C89.4211 18.8613 89.3998 18.9093 89.3571 18.952C89.3251 18.984 89.2825 19 89.2291 19H87.3571C87.3038 19 87.2558 18.984 87.2131 18.952C87.1811 18.9093 87.1651 18.8613 87.1651 18.808V14.024C87.1651 13.5973 87.0425 13.2507 86.7971 12.984C86.5625 12.7173 86.2478 12.584 85.8531 12.584C85.4585 12.584 85.1385 12.7173 84.8931 12.984C84.6585 13.2507 84.5411 13.5973 84.5411 14.024V18.808C84.5411 18.8613 84.5198 18.9093 84.4771 18.952C84.4451 18.984 84.4025 19 84.3491 19H82.4771C82.4238 19 82.3758 18.984 82.3331 18.952C82.3011 18.9093 82.2851 18.8613 82.2851 18.808V10.968C82.2851 10.9147 82.3011 10.872 82.3331 10.84C82.3758 10.7973 82.4238 10.776 82.4771 10.776H84.3491C84.4025 10.776 84.4451 10.7973 84.4771 10.84C84.5198 10.872 84.5411 10.9147 84.5411 10.968V11.528C84.5411 11.56 84.5518 11.5813 84.5731 11.592C84.5945 11.6027 84.6105 11.5973 84.6211 11.576C85.0585 10.9573 85.7091 10.648 86.5731 10.648ZM96.0923 7.992C96.0923 7.93867 96.1083 7.896 96.1403 7.864C96.1829 7.82133 96.2309 7.8 96.2843 7.8H98.1562C98.2096 7.8 98.2523 7.82133 98.2843 7.864C98.3269 7.896 98.3483 7.93867 98.3483 7.992V18.808C98.3483 18.8613 98.3269 18.9093 98.2843 18.952C98.2523 18.984 98.2096 19 98.1562 19H96.2843C96.2309 19 96.1829 18.984 96.1403 18.952C96.1083 18.9093 96.0923 18.8613 96.0923 18.808V18.28C96.0923 18.248 96.0816 18.232 96.0603 18.232C96.0389 18.2213 96.0176 18.2267 95.9963 18.248C95.5483 18.8347 94.9349 19.128 94.1562 19.128C93.4096 19.128 92.7643 18.92 92.2203 18.504C91.6869 18.088 91.3029 17.5173 91.0683 16.792C90.8869 16.2373 90.7963 15.592 90.7963 14.856C90.7963 14.0987 90.8923 13.4373 91.0843 12.872C91.3296 12.1893 91.7136 11.6507 92.2363 11.256C92.7696 10.8507 93.4256 10.648 94.2043 10.648C94.9723 10.648 95.5696 10.9147 95.9963 11.448C96.0176 11.48 96.0389 11.4907 96.0603 11.48C96.0816 11.4693 96.0923 11.448 96.0923 11.416V7.992ZM95.7563 16.504C95.9696 16.1093 96.0763 15.5707 96.0763 14.888C96.0763 14.1733 95.9589 13.6133 95.7243 13.208C95.4789 12.792 95.1216 12.584 94.6523 12.584C94.1509 12.584 93.7723 12.792 93.5163 13.208C93.2496 13.624 93.1163 14.1893 93.1163 14.904C93.1163 15.544 93.2283 16.0773 93.4523 16.504C93.7189 16.9627 94.1136 17.192 94.6363 17.192C95.1163 17.192 95.4896 16.9627 95.7563 16.504ZM103.683 19.128C102.787 19.128 102.019 18.8933 101.379 18.424C100.739 17.9547 100.301 17.3147 100.067 16.504C99.9174 16.0027 99.8428 15.4587 99.8428 14.872C99.8428 14.2427 99.9174 13.6773 100.067 13.176C100.312 12.3867 100.755 11.768 101.395 11.32C102.035 10.872 102.803 10.648 103.699 10.648C104.573 10.648 105.32 10.872 105.939 11.32C106.557 11.7573 106.995 12.3707 107.251 13.16C107.421 13.6933 107.507 14.2533 107.507 14.84C107.507 15.416 107.432 15.9547 107.283 16.456C107.048 17.288 106.611 17.944 105.971 18.424C105.341 18.8933 104.579 19.128 103.683 19.128ZM103.683 17.192C104.035 17.192 104.333 17.0853 104.579 16.872C104.824 16.6587 105 16.3653 105.107 15.992C105.192 15.6507 105.235 15.2773 105.235 14.872C105.235 14.424 105.192 14.0453 105.107 13.736C104.989 13.3733 104.808 13.0907 104.563 12.888C104.317 12.6853 104.019 12.584 103.667 12.584C103.304 12.584 103 12.6853 102.755 12.888C102.52 13.0907 102.349 13.3733 102.243 13.736C102.157 13.992 102.115 14.3707 102.115 14.872C102.115 15.352 102.152 15.7253 102.227 15.992C102.333 16.3653 102.509 16.6587 102.755 16.872C103.011 17.0853 103.32 17.192 103.683 17.192Z"
                        fill="#FFC07F" />
                    <path
                        d="M39.752 22.544C39.752 22.5973 39.7307 22.6453 39.688 22.688C39.656 22.72 39.6133 22.736 39.56 22.736H34.312C34.2587 22.736 34.232 22.7627 34.232 22.816V25.296C34.232 25.3493 34.2587 25.376 34.312 25.376H37.752C37.8053 25.376 37.848 25.3973 37.88 25.44C37.9227 25.472 37.944 25.5147 37.944 25.568V27.12C37.944 27.1733 37.9227 27.2213 37.88 27.264C37.848 27.296 37.8053 27.312 37.752 27.312H34.312C34.2587 27.312 34.232 27.3387 34.232 27.392V29.984C34.232 30.0373 34.2587 30.064 34.312 30.064H39.56C39.6133 30.064 39.656 30.0853 39.688 30.128C39.7307 30.16 39.752 30.2027 39.752 30.256V31.808C39.752 31.8613 39.7307 31.9093 39.688 31.952C39.656 31.984 39.6133 32 39.56 32H32.168C32.1147 32 32.0667 31.984 32.024 31.952C31.992 31.9093 31.976 31.8613 31.976 31.808V20.992C31.976 20.9387 31.992 20.896 32.024 20.864C32.0667 20.8213 32.1147 20.8 32.168 20.8H39.56C39.6133 20.8 39.656 20.8213 39.688 20.864C39.7307 20.896 39.752 20.9387 39.752 20.992V22.544ZM45.4638 23.648C46.3171 23.648 47.0051 23.9093 47.5278 24.432C48.0504 24.9547 48.3118 25.664 48.3118 26.56V31.808C48.3118 31.8613 48.2904 31.9093 48.2478 31.952C48.2158 31.984 48.1731 32 48.1198 32H46.2478C46.1944 32 46.1464 31.984 46.1038 31.952C46.0718 31.9093 46.0558 31.8613 46.0558 31.808V27.024C46.0558 26.5973 45.9331 26.2507 45.6878 25.984C45.4531 25.7173 45.1384 25.584 44.7438 25.584C44.3491 25.584 44.0291 25.7173 43.7838 25.984C43.5491 26.2507 43.4318 26.5973 43.4318 27.024V31.808C43.4318 31.8613 43.4104 31.9093 43.3678 31.952C43.3358 31.984 43.2931 32 43.2398 32H41.3678C41.3144 32 41.2664 31.984 41.2238 31.952C41.1918 31.9093 41.1758 31.8613 41.1758 31.808V23.968C41.1758 23.9147 41.1918 23.872 41.2238 23.84C41.2664 23.7973 41.3144 23.776 41.3678 23.776H43.2398C43.2931 23.776 43.3358 23.7973 43.3678 23.84C43.4104 23.872 43.4318 23.9147 43.4318 23.968V24.528C43.4318 24.56 43.4424 24.5813 43.4638 24.592C43.4851 24.6027 43.5011 24.5973 43.5118 24.576C43.9491 23.9573 44.5998 23.648 45.4638 23.648ZM54.6458 25.392C54.6458 25.4453 54.6244 25.4933 54.5818 25.536C54.5498 25.568 54.5071 25.584 54.4538 25.584H52.9178C52.8644 25.584 52.8378 25.6107 52.8378 25.664V29.056C52.8378 29.408 52.9071 29.6693 53.0458 29.84C53.1951 30.0107 53.4298 30.096 53.7498 30.096H54.2778C54.3311 30.096 54.3738 30.1173 54.4058 30.16C54.4484 30.192 54.4698 30.2347 54.4698 30.288V31.808C54.4698 31.9253 54.4058 31.9947 54.2778 32.016C53.8298 32.0373 53.5098 32.048 53.3177 32.048C52.4324 32.048 51.7711 31.904 51.3338 31.616C50.8964 31.3173 50.6724 30.7627 50.6618 29.952V25.664C50.6618 25.6107 50.6351 25.584 50.5818 25.584H49.6698C49.6164 25.584 49.5684 25.568 49.5258 25.536C49.4938 25.4933 49.4778 25.4453 49.4778 25.392V23.968C49.4778 23.9147 49.4938 23.872 49.5258 23.84C49.5684 23.7973 49.6164 23.776 49.6698 23.776H50.5818C50.6351 23.776 50.6618 23.7493 50.6618 23.696V21.792C50.6618 21.7387 50.6778 21.696 50.7098 21.664C50.7524 21.6213 50.8004 21.6 50.8538 21.6H52.6458C52.6991 21.6 52.7418 21.6213 52.7738 21.664C52.8164 21.696 52.8378 21.7387 52.8378 21.792V23.696C52.8378 23.7493 52.8644 23.776 52.9178 23.776H54.4538C54.5071 23.776 54.5498 23.7973 54.5818 23.84C54.6244 23.872 54.6458 23.9147 54.6458 23.968V25.392ZM60.0999 23.664C60.4839 23.664 60.7879 23.7387 61.0119 23.888C61.0972 23.9307 61.1292 24.0107 61.1079 24.128L60.7719 25.952C60.7612 26.08 60.6865 26.1173 60.5479 26.064C60.3879 26.0107 60.2012 25.984 59.9879 25.984C59.9025 25.984 59.7852 25.9947 59.6359 26.016C59.2519 26.048 58.9265 26.192 58.6599 26.448C58.3932 26.6933 58.2599 27.024 58.2599 27.44V31.808C58.2599 31.8613 58.2385 31.9093 58.1959 31.952C58.1639 31.984 58.1212 32 58.0679 32H56.1959C56.1425 32 56.0945 31.984 56.0519 31.952C56.0199 31.9093 56.0039 31.8613 56.0039 31.808V23.968C56.0039 23.9147 56.0199 23.872 56.0519 23.84C56.0945 23.7973 56.1425 23.776 56.1959 23.776H58.0679C58.1212 23.776 58.1639 23.7973 58.1959 23.84C58.2385 23.872 58.2599 23.9147 58.2599 23.968V24.576C58.2599 24.608 58.2705 24.6293 58.2919 24.64C58.3132 24.6507 58.3292 24.6453 58.3399 24.624C58.7772 23.984 59.3639 23.664 60.0999 23.664ZM69.2058 27.04C69.2698 27.4453 69.2911 27.8987 69.2698 28.4C69.2591 28.528 69.1898 28.592 69.0618 28.592H64.1178C64.0538 28.592 64.0324 28.6187 64.0538 28.672C64.0858 28.8853 64.1444 29.0987 64.2298 29.312C64.5071 29.9093 65.0724 30.208 65.9258 30.208C66.6084 30.1973 67.1471 29.92 67.5418 29.376C67.5844 29.312 67.6324 29.28 67.6858 29.28C67.7178 29.28 67.7551 29.3013 67.7978 29.344L68.9498 30.48C69.0031 30.5333 69.0298 30.5813 69.0298 30.624C69.0298 30.6453 69.0084 30.688 68.9658 30.752C68.6138 31.1893 68.1604 31.5307 67.6058 31.776C67.0511 32.0107 66.4431 32.128 65.7818 32.128C64.8644 32.128 64.0858 31.92 63.4457 31.504C62.8164 31.088 62.3631 30.5067 62.0858 29.76C61.8618 29.2267 61.7498 28.528 61.7498 27.664C61.7498 27.0773 61.8298 26.56 61.9898 26.112C62.2351 25.3547 62.6618 24.752 63.2698 24.304C63.8884 23.856 64.6191 23.632 65.4618 23.632C66.5284 23.632 67.3818 23.9413 68.0218 24.56C68.6724 25.1787 69.0671 26.0053 69.2058 27.04ZM65.4778 25.584C64.8058 25.584 64.3631 25.8987 64.1498 26.528C64.1071 26.6667 64.0698 26.8373 64.0378 27.04C64.0378 27.0933 64.0644 27.12 64.1178 27.12H66.8858C66.9498 27.12 66.9711 27.0933 66.9498 27.04C66.8964 26.7307 66.8698 26.5813 66.8698 26.592C66.7738 26.272 66.6031 26.0267 66.3578 25.856C66.1231 25.6747 65.8298 25.584 65.4778 25.584Z"
                        fill="#FFC07F" />
                </svg>
            </Link>
        )
    }



    return (
        <>
            <OverlayTrigger
                trigger="click"
                placement={"bottom"}
                overlay={
                    <Popover>
                        <Popover.Body className="d-flex flex-column">
                            <Link to="dashboard/userForm">
                                <button className="btn-custom-default btn-principal">Minha conta</button>
                            </Link>
                            <button className="btn-custom-default btn-cancelar my-2" onClick={() => {
                                logout()
                                refreshPage()
                            }}>Sair</button>
                        </Popover.Body>
                    </Popover>
                }
            >
                <div className="d-flex align-items-center">
                    <div>
                        <User />
                    </div>
                    <p className="mb-0">Olá {userName}! </p>
                </div>
            </OverlayTrigger>

        </>
    )
}

export default LoginLogoutButton