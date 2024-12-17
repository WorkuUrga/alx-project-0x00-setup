import UserPage from "./users";
import PostsPage from "./posts";
const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-7xl font-thin">Welcome Page</h1>
      <UserPage />
      <PostsPage />
    </div>
  )
}
export default Home;