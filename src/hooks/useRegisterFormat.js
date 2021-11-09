
function useRegisterFormat(){

    const handleGenderCreation = (inputGender) => {
        return { description : inputGender }
    }

    const handleTelephoneCreation = (inputTelephone) => {
        let telArr = inputTelephone.split(") ")
        const ddd = telArr[0].slice(1)

        let numArr = telArr[1].split("-")
        const phoneNumber = numArr[0] + numArr[1]

        return { ddd, phoneNumber }
    }

    const handleAddressCreation = (inputAddress) => {
        let newObj = {
            ...inputAddress, 
            city : {cityName : inputAddress.cityTemp},
            state : {uf: inputAddress.stateTemp}
        }

        delete newObj.cityTemp
        delete newObj.stateTemp

        return newObj

    }

    const handleCreditCardCreation = (inputCreditCard) => {
        let newObj = {
            ...inputCreditCard,
            cardBrand : {cardBrandName : inputCreditCard.cardBrandTemp}
        }

        delete newObj.cardBrandTemp
        return newObj
    }

    return {
        handleAddressCreation,
        handleCreditCardCreation,
        handleGenderCreation,
        handleTelephoneCreation
    }
}

export default useRegisterFormat