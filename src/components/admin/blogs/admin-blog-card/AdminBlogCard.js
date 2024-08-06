import Link from "next/link";
import Image from "next/image";
import styles from "./AdminBlogCard.module.css";
import addPic from "/public/icons/admin/add-circle.svg";

const AdminBlogCard = ({ add, blog }) => {
  if (add) {
    return (
      <Link href={"blogs/add"} className={styles.container}>
        <Image src={addPic} alt="add" width={100} height={100} />
      </Link>
    );
  }
  const { published_date, author, h1, category, picture, isPublished, slug } =
    blog;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>{h1}</h3>
        <h5>{category}</h5>
        <p>نویسنده {author}</p>
        <p>
          تاریخ انتشار {new Date(published_date).toLocaleDateString("fa-IR")}
        </p>

        <div className={styles.controlls}>
          <Link href={`/admin/blogs/${slug}`}>ویرایش</Link>
          <Link href={`/blog/${category}/${slug}`} target="_blank">
            لینک بلاگ
          </Link>
        </div>
      </div>
      <div className={styles.media}>
        <Image
          src={picture}
          alt="banner"
          width={100}
          height={100}
          quality={30}
        />
      </div>
      <span style={{ backgroundColor: isPublished ? "#4bc960" : "red" }}>
        {isPublished ? "منتشر شده" : "منتشر نشده"}
      </span>
    </div>
  );
};

export default AdminBlogCard;
