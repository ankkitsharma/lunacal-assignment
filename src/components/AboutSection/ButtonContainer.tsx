import styles from "./AboutSection.module.css";

export default function ButtonContainer() {
  return (
    <div className="w-full min-h-9 h-[20%] bg-[#171717] rounded-[23px] p-2 flex justify-between items-center gap-2">
      <Button body="About Me" />
      <Button body="Experiences" />
      <Button body="Recommended" />
    </div>
  );
}

function Button({ body }: { body: string }) {
  return (
    <button className={`w-1/3 h-full relative ${styles.btn}`}>{body}</button>
  );
}
