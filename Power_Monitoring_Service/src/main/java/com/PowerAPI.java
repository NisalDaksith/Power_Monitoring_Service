package com;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;



@WebServlet("/PowerAPI")
@MultipartConfig
public class PowerAPI extends HttpServlet  {
	private static final long serialVersionUID = 1L;
    
	Power power = new Power();
    
   
    public PowerAPI() {
        super();
    }
    
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, NumberFormatException {
		
		String name = request.getParameter("name");
		String eType = request.getParameter("eType");
		String cMW = request.getParameter("cMW");
		String status = request.getParameter("status");

		String output = Power.insertData (name, eType, cMW, status);
		response.getWriter().write(output);
	}
	
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		
		String output = Power.updateData(paras.get("hidPowerIDSave").toString(),
	    paras.get("name").toString(),
		paras.get("eType").toString(),
		paras.get("cMW").toString(),
	    paras.get("status").toString());
		 
		response.getWriter().write(output); 

		
		
		
		int id = Integer.parseInt(request.getParameter("hidPowerIDSave"));
		String name = request.getParameter("name");
		String eType = request.getParameter("eType");
		String cMW = request.getParameter("cMW");
		String status = request.getParameter("status");
	
		String output = Power.updateData( name, eType, cMW, status);
		response.getWriter().write(output);
		
	}
	
	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map paras = getParasMap(request);
		String output = Power.deleteData(paras.get("id").toString());
		response.getWriter().write(output);
	}
	
	// Convert request parameters to a Map
			private static Map getParasMap(HttpServletRequest request)
			{
				Map<String, String> map = new HashMap<String, String>();
				try
				{
					 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
					 String queryString = scanner.hasNext() ?
					 scanner.useDelimiter("\\A").next() : "";
					 scanner.close();
					 String[] params = queryString.split("&");
					 for (String param : params)
					 { 
						 String[] p = param.split("=");
						 map.put(p[0], p[1]);
					}
				}catch (Exception e){
					
				}
					return map;
			}

}