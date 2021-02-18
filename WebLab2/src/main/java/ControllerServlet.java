import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


public class ControllerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String x=request.getParameter("radioX");
        String y=request.getParameter("yValue");
        try {
            double a=Double.parseDouble(y);
        }
        catch (NumberFormatException w)
        {
            request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
        }
        String R=request.getParameter("selectOptionR");
      //  || y.matches("(?i).*[a-zа-я].*")|| y.matches("[^a-zA-Zа-яА-Я]+")
        if(x == null || y == null || R == null|| y.equals("-") || y.equals("+")){
            request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
        } else {
            try {
                double a=Double.parseDouble(y);
                request.getServletContext().getRequestDispatcher("/checkAndResult").forward(request, response);
            }
            catch (NumberFormatException w)
            {
                request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
            }

        }
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

}
