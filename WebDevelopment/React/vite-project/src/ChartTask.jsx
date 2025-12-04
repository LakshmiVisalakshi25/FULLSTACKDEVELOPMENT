import React from "react";
import ReactApexChart from "react-apexcharts";
import "./ChartTask.css";

const ChartTask = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

  const commonAxisStyle = {
    labels: {
      style: {
        colors: "skyblue",
        fontSize: "14px",
      },
    },
  };

  const technicalSkillsOptions = {
    chart: { type: "line" },
    xaxis: { categories: months, ...commonAxisStyle },
    yaxis: commonAxisStyle,
  };
  const technicalSkillsSeries = [{ name: "Technical Score", data: [2, 3, 4, 5, 5, 6, 6.5, 7, 7.5] }];

  const attendanceOptions = {
    chart: { type: "bar" },
    xaxis: { categories: months, ...commonAxisStyle },
    yaxis: commonAxisStyle,
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            { from: 0, to: 50, color: "#f76767ff" },
            { from: 51, to: 100, color: "#81f6b2ff" },
          ],
        },
      },
    },
  };
  const attendanceSeries = [{ name: "Attendance", data: [90, 35, 60, 20, 80, 5, 95, 23, 26] }];

  const nonTechnicalOptions = {
    chart: { type: "area" },
    xaxis: { categories: months, ...commonAxisStyle },
    yaxis: commonAxisStyle,
  };
  const nonTechnicalSeries = [
    { name: "Communication", data: [2, 2.5, 3, 4, 4.5, 5, 6, 6.5, 7] },
    { name: "Teamwork", data: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7] },
  ];

  const contestOptions = {
    chart: { type: "bar" },
    xaxis: { categories: months, ...commonAxisStyle },
    yaxis: commonAxisStyle,
  };
  const contestSeries = [{ name: "Contest Score", data: [60, 70, 75, 80, 85, 90, 95, 100, 105] }];

  const radialBarOptions = {
    chart: { height: 280, type: "radialBar" },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: "TOTAL",
          },
        },
      },
    },
    labels: ["Technical Skills", "Attendance", "Non-Technical", "Contest"],
  };
  const radialBarSeries = [67, 84, 97, 61];

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "aliceblue", marginBottom: "30px" }}>
        STUDENT MONTHLY ANALYSIS
      </h1>

      <div className="parent">
        <div className="chart-box">
          <h2 className="chart-title">Technical Skills</h2>
          <ReactApexChart options={technicalSkillsOptions} series={technicalSkillsSeries} type="line" height={350} />
        </div>

        <div className="chart-box">
          <h2 className="chart-title">Attendance Insights</h2>
          <ReactApexChart options={attendanceOptions} series={attendanceSeries} type="bar" height={350} />
        </div>
      </div>

      <div className="parent center">
        <div className="chart-box" style={{ maxWidth: "600px", width: "100%" }}>
          <h2 className="chart-title">Overall Performance</h2>
          <ReactApexChart options={radialBarOptions} series={radialBarSeries} type="radialBar" height={350} />
        </div>
      </div>

      <div className="parent">
        <div className="chart-box">
          <h2 className="chart-title">Non-Technical Skills</h2>
          <ReactApexChart options={nonTechnicalOptions} series={nonTechnicalSeries} type="area" height={350} />
        </div>

        <div className="chart-box">
          <h2 className="chart-title">Monthly Coding Contest</h2>
          <ReactApexChart options={contestOptions} series={contestSeries} type="bar" height={350} />
        </div>
      </div>
    </div>
  );
};

export default ChartTask;
