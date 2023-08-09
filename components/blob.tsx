export const Blob = ({
  additionalClassName,
}: {
  additionalClassName: string;
}) => {
  return (
    <svg
      className={additionalClassName}
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0942 1.01728C14.0244 0.935686 15.99 0.0662689 17.8093 0.713869C19.6504 1.36922 21.2719 2.82051 22.1068 4.58141C22.9221 6.3011 22.7746 8.36635 22.3126 10.2116C21.9171 11.7909 20.2089 12.7189 19.6831 14.26C19.2285 15.5925 19.8748 17.0658 19.5102 18.4255C19.0456 20.1575 18.691 22.1422 17.2729 23.2461C15.8722 24.3365 13.8407 24.5285 12.0942 24.1984C10.397 23.8777 9.19545 22.4427 7.78267 21.4524C6.5593 20.5949 5.41536 19.7168 4.29374 18.7309C2.98992 17.5848 1.24739 16.7568 0.608226 15.146C-0.03692 13.5201 0.139508 11.5835 0.817917 9.97112C1.47547 8.40828 3.37512 7.76706 4.30884 6.35057C5.35946 4.75675 5.0308 2.26783 6.608 1.18739C8.13464 0.141571 10.243 1.09554 12.0942 1.01728Z"
      />
    </svg>
  );
};

export default Blob;