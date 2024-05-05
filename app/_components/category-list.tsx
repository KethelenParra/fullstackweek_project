import { db } from "../_lib/prisma";
import CategoryItem from "./ui/category-item";



const CategoryList = async () => {
    const categories = await db.category.findMany({});

    return (
        <div className="flex grid-cold-2 gap-3">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}  
        </div>
    );
};
 
export default CategoryList;