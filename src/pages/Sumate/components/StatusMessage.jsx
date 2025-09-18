
export const StatusMessage = ({ type, title, children }) => {
    const styles = {
        success: "p-4 bg-green-50 border-l-4 border-green-400 text-green-700 rounded-lg",
        error: "p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-lg",
        warning: "p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 rounded-lg",
        info: "p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-700 rounded-lg"
    };

    return (
        <div className={styles[type]}>
            <p className="font-semibold">{title}</p>
            {children}
        </div>
    );
};


