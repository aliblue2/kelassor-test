import styles from "./AdminBlogsPage.module.css";
import AdminBlogCard from "./admin-blog-card/AdminBlogCard";

const AdminBlogsPage = ({ blogs }) => {
  return (
    <div className={styles.container}>
      <h1>بلاگ ها</h1>
      {!blogs.length ? (
        <div className={styles.noBlogs}>
          <h3>هیچ بلاگی برای نمایش وجود ندارد</h3>
          <AdminBlogCard add={true} />
        </div>
      ) : (
        <div className={styles.blogs}>
          <AdminBlogCard add={true} />
          {blogs.map((blog) => (
            <AdminBlogCard key={blog._id} blog={blog} add={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminBlogsPage;
