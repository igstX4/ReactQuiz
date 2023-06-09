import React from "react";
import CourseImg from "../assets/CourseImg.png";
import Test from "../assets/Test.png";
import { NavLink } from "react-router-dom";
import '../styles/ArticleOrTestItem.scss'

interface ItemI {
    text: string;
    variant: "course" | "test";
    id: string;
}
const ArticleItem: React.FC<ItemI> = ({ text, id, variant }) => {

    return (
        <div className="CourseItem">
            <div className="CourseHeaderDiv" style={{ display: "flex", minHeight: '100%'}}>
                <img
                    className="CourseItemImg"
                    src={variant === "course" ? CourseImg : Test}
                    alt=""
                />
                <div className="CourseItemTextDiv"><h1 className="CourseItemText">{text}</h1></div>
            </div>
            
            <NavLink
                className="passthetestbtn"
                to={
                    variant === "course"
                        ? `/viewArticle/${id}`
                        : `/passingTest/${id}`
                }
            >
                {variant === "course" ? "Check Article" : "Pass the test"}
            </NavLink>
        </div>
    );
};

export default ArticleItem;
