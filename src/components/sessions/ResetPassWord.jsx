import { useCallback, useState } from "react";
import { Button, Card, Box, styled } from "@mui/material";
import logo from "../../assets/qude.svg"
import * as yup from "yup";
import { useFormik } from "formik";
import Image from "../Image";
import { H1, H6 } from "../Typography";
import QudeTextField from "../QudeTextField";
import EyeToggleButton from "./EyeToggleButton";
import SocialButtons from "./SocialButtons";
import { FlexBox, FlexRowCenter } from "../flex-box";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slice/authSlice";
import axios from "axios";
import { forgotPassword, resetPassword } from "../../apis/auth";

const fbStyle = {
    background: "#3B5998",
    color: "white",
};
const googleStyle = {
    background: "#4285F4",
    color: "white",
};
export const Wrapper = styled(({ children, passwordVisibility, ...rest }) => (
    <Card {...rest}>{children}</Card>
))(({ theme, passwordVisibility }) => ({
    width: 500,
    padding: "2rem 3rem",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
    ".passwordEye": {
        color: passwordVisibility
            ? theme.palette.grey[600]
            : theme.palette.grey[400],
    },
    ".facebookButton": {
        marginBottom: 10,
        ...fbStyle,
        "&:hover": fbStyle,
    },
    ".googleButton": { ...googleStyle, "&:hover": googleStyle },
    ".agreement": {
        marginTop: 12,
        marginBottom: 24,
    },
}));

const ResetPassWord = () => {
    const {id} = useParams()

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.auth.isLoading)
    const togglePasswordVisibility = useCallback(() => {
        setPasswordVisibility((visible) => !visible);
    }, []);

    const handleFormSubmit = async (values) => {
        const response = await resetPassword(values)
        console.log(response);
    };
    
    const initialValues = {
        password: "",
        resetToken: id,
    };
    const formSchema = yup.object().shape({
        password: yup.string().required("password is required"),
});
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            onSubmit: handleFormSubmit,
            validationSchema: formSchema,
        });
    return (
        <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
            <form onSubmit={handleSubmit}>
                <Image
                    src={logo}
                    sx={{
                        m: "auto",
                    }}
                />

                <H1 textAlign="center" mt={1} mb={4} fontSize={16}>
                    Nhap email de lay lai pass
                </H1>

                <QudeTextField
                    mb={1.5}
                    fullWidth
                    name="password"
                    size="small"
                    type="password"
                    variant="outlined"
                    onBlur={handleBlur}
                    value={values.password}
                    onChange={handleChange}
                    label="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                />

                {/* <QudeTextField
                    mb={2}
                    fullWidth
                    size="small"
                    name="password"
                    label="Password"
                    autoComplete="on"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    placeholder="*********"
                    type={passwordVisibility ? "text" : "password"}
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    InputProps={{
                        endAdornment: (
                            <EyeToggleButton
                                show={passwordVisibility}
                                click={togglePasswordVisibility}
                            />
                        ),
                    }}
                /> */}

                <Button
                    fullWidth
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{
                        height: 44,
                    }}
                    disabled={isLoading}
                >
                    Yeu cau reset password
                </Button>
            </form>

            {/* <SocialButtons /> */}

           
        </Wrapper>
    );
};

export default ResetPassWord;
