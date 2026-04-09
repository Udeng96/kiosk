package com.eseict.kiosk.config.database;

import com.eseict.kiosk.config.constant.ApiConstants;
import com.zaxxer.hikari.HikariDataSource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

import javax.sql.DataSource;
import java.util.Properties;



@Slf4j
@Configuration
@EnableJpaRepositories(
        basePackages = {
                "com.eseict.kiosk.repository.jpa"
        },
        entityManagerFactoryRef = "rinoEm",
        transactionManagerRef = "rinoTm"
)

public class DataConfig {

    // primary
    @Value("${spring.datasource.hikari.jdbc-url}")
    String jdbcUrl;
    @Value("${spring.datasource.username}")
    String userName;
    @Value("${spring.datasource.password}")
    String password;
    @Value("${spring.datasource.hikari.driver}")
    String driverName;
    @Value("${spring.datasource.dialect}")
    private String dialect;

    @Primary
    @Bean(name = "rino")
    public DataSource dataSource() {
        HikariDataSource hikariDataSource = new HikariDataSource();
        hikariDataSource.setJdbcUrl(jdbcUrl);
        hikariDataSource.setDriverClassName(driverName);
        hikariDataSource.setUsername(userName);
        hikariDataSource.setPassword(password);
        hikariDataSource.setMaximumPoolSize(Integer.parseInt("10"));
        hikariDataSource.setConnectionTimeout(Long.parseLong("300000"));
        hikariDataSource.setDataSourceProperties(jpaHibernateProperties());

        log.info("####################################################################################################################");
        log.info("## SSC PRIMARY DataSource Info.");
        log.info("Driver   : {}", driverName);
        log.info("URL      : {}", jdbcUrl);
        log.info("USERNAME : {}", userName);
        log.info("PASSWORD : {}", password);
        log.info("####################################################################################################################");

        return hikariDataSource;
    }

    private Properties jpaHibernateProperties() {
        Properties props = new Properties();
        props.setProperty("hibernate.show_sql", "false");
        props.setProperty("hibernate.format_sql", "true");
        props.setProperty("hibernate.jdbc.time_zone", ApiConstants.Common.TIME_ZONE);
        props.setProperty("hibernate.dialect", dialect);
        props.setProperty("hibernate.c3p0.max_size", "10");
        props.setProperty("hibernate.c3p0.timeout", "300000");
        return props;
    }

    @Primary
    @Autowired
    @Bean(name = "rinoTm")
    public JpaTransactionManager jpaTransactionManager(@Qualifier("rinoEm") LocalContainerEntityManagerFactoryBean entityManagerFactoryBean) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean.getObject());
        return transactionManager;
    }

    @Primary
    @Bean(name = "rinoEm")
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(
            EntityManagerFactoryBuilder builder,
            @Qualifier("rino") DataSource ds) {
        LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
        HibernateJpaVendorAdapter jpaVendorAdapter = new HibernateJpaVendorAdapter();
        jpaVendorAdapter.setShowSql(true);
        factoryBean.setJpaVendorAdapter(jpaVendorAdapter);
        factoryBean.setDataSource(ds);
        factoryBean.setPackagesToScan(
                "com.eseict.kiosk.domain.vo"
        );
        factoryBean.setJpaProperties(jpaHibernateProperties());
        return factoryBean;
    }
}
