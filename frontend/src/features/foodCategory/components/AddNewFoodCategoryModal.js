import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import SelectBox from '../../../components/Input/SelectBox'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { addFoodCategory } from "../foodCategorySlice"

const INITIAL_FOOD_CATEGORY_OBJ = {
    name: "",
    description: "",
}

function AddNewFoodCategoryModal({ closeModal }) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [foodCategoryObj, setFoodCategoryObj] = useState(INITIAL_FOOD_CATEGORY_OBJ)

    const addNewFoodCategory = () => {
        let newFoodCategoryObj = {
            "name": foodCategoryObj.name,
            "description": foodCategoryObj.description,
        }
        fetch('http://localhost:8080/api/food-category/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(foodCategoryObj)
        }).then(res => res.json())
            .then(res => {
                dispatch(addFoodCategory({ newFoodCategoryObj }))
                dispatch(showNotification({ message: "New FoodCategory Added!", status: 1 }))
            });



        closeModal()
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setFoodCategoryObj({ ...foodCategoryObj, [updateType]: value })
    }

    return (
        <>

            <InputText type="text" defaultValue={foodCategoryObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue} />

            <InputText type="text" defaultValue={foodCategoryObj.description} updateType="description" containerStyle="mt-4" labelTitle="Description" updateFormValue={updateFormValue} />
            <SelectBox defaultValue={{ name: 'b', value: 'b' }} options={[{ name: 'a', value: 'a' }, { name: 'b', value: 'b' }, { name: 'c', value: 'c' }]} />

            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => addNewFoodCategory()}>Save</button>
            </div>
        </>
    )
}

export default AddNewFoodCategoryModal